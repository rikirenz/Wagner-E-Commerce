$( document ).ready(function() {
	
	var db = {};
	var backHome = false;
	var itemsName = ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"];

	// control for drop list
	$(".dropdown-menu li a").click(function(){
	  var selText = $(this).text();
	  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});


	$.ajax({
		method: 'GET',
		url: 'php/db.json',
		success: function(d) {

			$("#balance").text(d["balance"] +" $");		
			$("#cart-count").text(d["cartCount"]);		

		},
		error: function(a,b,c) {
			alert('Ops... This is very embarrassing!');
		}
	});

	$("#modal-button").click(function() {
		if (backHome) window.location.href = $('#riki').attr('href');	
	});
	
	$(function() {
	    $('.datepicker').datepicker();
  	});	

	var wrongFieldsMessage;
	$("#confirm-button").click(function() {
		// tanta roba
		var body = ""; 
		var buttonLabel = "";
		
		if (checkFields()){
			body 		= 	"<p>You have concluded your shopping.</p><p>You will recive your articles at home.</p><p>Thanks!</p>";
			buttonLabel	= 	"Back to the Home";
			backHome = true
		}else{
			body 		= 	"<p>There are some errors in your form!</p>";
			body       +=	"<ul id=\"errorList\">" + wrongFieldsMessage + "<ul>"
			buttonLabel = 	"ok";
			backHome = false;
		}

		// show the modal
		$("#modal-button").html(buttonLabel);
		$("#modalBody").html(body);

		$("#dialogBtn").trigger("click");
	});
	

	function checkFields() {
		wrongFieldsMessage = "";

		if ($("#txt-name").val().length == 0){
			wrongFieldsMessage += "<li>Invalid name"
		}
		if ($.isNumeric($("#txt-postalCode").val()) == false){
			wrongFieldsMessage += "<li>Invalid postal code"
		}
		if ($("#txt-address").val().length == 0){
			wrongFieldsMessage += "<li>Invalid address"
		} 
		if ($("#txt-date").val().length == 0){
			wrongFieldsMessage += "<li>Invalid birth date"
		}
		if ($("#lstExpiryMonth").val().trim() == 	"Month"){
			wrongFieldsMessage += "<li>Select the expiry Month"
		}
		if ($("#lstExpiryYear").val().trim() == "Year"){
			wrongFieldsMessage += "<li>Select the expiry Year"
		}
		if ($("#txt-holdersName").val().length == 0){
			wrongFieldsMessage += "<li>Invalid holder's name"
		}
		if($.isNumeric($("#txt-cardNumber").val())== false){
			wrongFieldsMessage += "<li>Invalid card number"
		}
		if($("#txt-phone").val().length == 0){
			wrongFieldsMessage += "<li>Invalid phone"
		}
		if($("#txt-city").val().length == 0){
			wrongFieldsMessage += "<li>Invalid city"
		}
		if($.isNumeric($("#txt-cardId").val())== false){
			wrongFieldsMessage += "<li>Invlid CCV"
		}
		if($("#lstbrandCard").text().trim() == "Select brand"){
			wrongFieldsMessage += "<li>Select the Card's brand"
		}

		if (wrongFieldsMessage.length > 0) return false
		return true;
	};


	var whichInput="";
	var textInput = ""
	$("#rec-button").click(function() {
		if (annyang) {
	  		var commands = {
	    		'*val': function(val) {
	      			$('#speech-text').text(val);
					$('#speech-suggestion').text("If the text is correct please press ok. In other case press cancel or retry.");
					textInput=val;
	    		}
  			};
  		  	annyang.addCommands(commands);
		  	annyang.debug();
		  	annyang.start();
		}
	});
	$("#stop-button").click(function() {
		annyang.abort();
	});

	$("#speech-modal-ok").click(function() {
		// again the recbutton
		$('#'+whichInput).val(textInput);
		$("#speech-modal-cancel").trigger("click");
	});

	$(".microphone-button").click(function() {
		var strA = $(this).attr("data-input");
		whichInput= $(this).attr("data-input-id");
		$("#speech-modal-button").trigger("click");
		// mettere strA nella popup
		if (strA == "name"){
			$("#speech-input").text("your name");
		}else if (strA == "address"){
			$("#speech-input").text("your address");
		}else if (strA == "city"){
			$("#speech-input").text("your city");	
		}else{
			$("#speech-input").text("the card's owner");	
		}
	});


});