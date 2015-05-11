$( document ).ready(function() {
	var db = {};

	var itemsName = ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"];


	$.ajax({
		method: 'GET',
		url: 'php/db.json',
		success: function(d) {


			$("#balance").text(d["balance"] +" $");		
			$("#cart-count").text(d["cartCount"]);		
			$("#cart-count-2").text(d["cartCount"]);

			for (var i=0; i<itemsName.length; i++) {
				if(d[itemsName[i]].number>0){
					$('tbody').append("<tr><td>"+ itemsName[i] +"</td><td>"+ d[itemsName[i]].number +"</td><td>"+ (d[itemsName[i]].price*d[itemsName[i]].number) +"</td></tr>");
				}
			}


		},
		error: function(a,b,c) {
			alert('Ops... This is very embarrassing!');
		}
	});


	$("#payment-button").click(function() {
		window.location.href = $('#riki').attr('href');	
	});
});