$( document ).ready(function() {

	/*************** db student ***************/
	var db = {
				item1:{number:0,price:10},
				item2:{number:0,price:11}, 
				item3:{number:0,price:12}, 
				item4:{number:0,price:13},
				item5:{number:0,price:14}, 
				item6:{number:0,price:15}, 
				item7:{number:0,price:16}, 
				item8:{number:0,price:17}, 
				item9:{number:0,price:18}, 
				item10:{number:0,price:19},
				cartCount:0,
				balance:0
			};
	function increaseItems(nameItem){ 
		db[nameItem]["number"] = db[nameItem]["number"]+1;
	}
	/*******************************************/

	/*************** CartCounter ***************/
    function increaseCart(){
		db["cartCount"]++;
		$("#cart-count").text(db["cartCount"]);		
	}
	/*******************************************/

	/************** Balance owing **************/
	function increaseBalance(nameItem){
		db["balance"] = db["balance"]+db[nameItem]["price"];
		$("#balance").text(db["balance"]);		
	}
	/******************************************/


	/************** View Button **************/
	$("#add-button").click(function() {
		var currentItem = $("#items-list .active").attr("id");
		increaseBalance(currentItem);
		increaseItems(currentItem);
		increaseCart();
	});


	data={data:{}};
	data.data = db;
	$("#check-button").click(function() {
		if(db.cartCount == 0){
			$("#error-button").trigger("click");	
		} 
		else{
			$.ajax({
				method: 'POST',
				url: "php/save.php",
				data: JSON.stringify(data),
				success: function(d) {
					window.location.href = $('#riki').attr('href');},
				error: function(a,b,c) {
					alert('Ops... This is very embarrassing!');
				}
			});
		}
 	});
});