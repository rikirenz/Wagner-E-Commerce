$( document ).ready(function() {
	var db = {password:"password",username:"username"};

	$("#login-button").click(function() {
		var password = $('#pwd').val();
		var username = $('#usr').val();

		if ( password == db.password && username == db.username ){
			window.location.href = $('#riki').attr('href');		
		}else{
			//modale
			$('#pwd').val('');
			$('#usr').val('');
			$("#error-button").trigger("click");
		}


	});

});
