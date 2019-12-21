
function int() {
  var v1 = new controller();
  v1.bd();
}
function messages()
{
	var v1 = new controller();
	v1.reception();
}

$(document).ready(function(){
	if(localStorage.getItem("auth")!= undefined)
{
	var monobjet_json = localStorage.getItem("auth");
var monobjet = JSON.parse(monobjet_json);
$(".imgConnexion").attr('src',monobjet.picture);
//alert(monobjet.lastname);
 
$(".nomPrenomUtilisateur").html(monobjet.nom+" "+monobjet.prenom);
if(monobjet.privilege=='a')
{ $('#btnUsers').show();
  //alert("ffff");
}
else
 $('#btnUsers').hide();
}

 
	var v1 = new controller();
	
	$('td').click( function() {
	 
	 // alert($(this).attr('id'));
	 v1.suppMessage($(this).attr('id'));
	 
	});
	//v1.affiche();
	//v1.discusion($('#email').val());
	//v1.liste();
	
	$('#contact').keyup( function() {
	  var v1 = new controller();
	        v1.nvMessage();
	 
	});
	$('#init').click( function() {
	  var v1 = new controller();
        v1.bd();
	 
	});
	$('.auth').click( function() {
	 
	  
	  v1.authentification($('#login').val(),$('#password').val());
	 // location.replace("./test.html?results=10")
  //v1.suppMessage(20);
	});

	/*$('td').click( function() {
	 
	  alert($(this).attr('id'));
	 //v1.suppMessage($(this).attr('id'));
	 
	});*/

	

	$('#btnEnvoyer').click( function() {
	 
	  

	  v1.nouveauMessage($('#objet').val(),$('#sujet').val(),$('#contact').val());

	   
	});
	
	

	$('.btnDecon').click( function() {
	 
	  
	 v1.deconexion();
	});
});