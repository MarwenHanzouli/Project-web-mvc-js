$(document).ready(function(){
	
		$("#btnNouveau").click(function(){
			$(".envoyes").hide();
			$(".Compte").hide();
			$(".reception").hide();
			$(".USERS").hide();
			$(".nouveau").css({"display":"flex","flex-direction": "column"});
			$("#btnNouveau").addClass('class1');
			$("#btnReception").removeClass('class1');
			$("#btnCompte").removeClass('class1');
			$("#btnEnvoyes").removeClass('class1');
			$("#btnUsers").removeClass('class1');
			$("#i1").addClass('class2');
			$("#i2").removeClass('class2');
			$("#i3").removeClass('class2');
			$("#i4").removeClass('class2');
			$("#i5").removeClass('class2');
			
		});
		$("#btnEnvoyer2").click(function(){
			var v1 = new controller();
			v1.modifierUser();
			
		});
		$("#btnCompte").click(function(){
			$(".envoyes").hide();
			$(".reception").hide();
			$(".nouveau").hide();
			$(".USERS").hide();
			$(".Compte").css({"display":"flex","flex-direction": "column"});
			$("#btnCompte").addClass('class1');
			$("#btnReception").removeClass('class1');
			$("#btnEnvoyes").removeClass('class1');
			$("#btnNouveau").removeClass('class1');
			$("#btnUsers").removeClass('class1');
			$("#i4").addClass('class2');
			$("#i1").removeClass('class2');
			$("#i2").removeClass('class2');
			$("#i3").removeClass('class2');
			$("#i5").removeClass('class2');
			var v1 = new controller();
			v1.compte();
			
		});
		$(".h").click(function(){
			var v1 = new controller();
			v1.supUser(2);
			
		});
		
		$("#btnUsers").click(function(){
			$(".envoyes").hide();
			$(".nouveau").hide();
			$(".reception").hide();
			$(".Compte").hide();
			$(".USERS").css({"display":"flex","flex-direction": "column"});
			$("#btnUsers").addClass('class1');
			$("#btnReception").removeClass('class1');
			$("#btnEnvoyes").removeClass('class1');
			$("#btnNouveau").removeClass('class1');
			$("#btnCompte").removeClass('class1');
			$("#i5").addClass('class2');
			$("#i1").removeClass('class2');
			$("#i2").removeClass('class2');
			$("#i3").removeClass('class2');
			$("#i4").removeClass('class2');
			var v1 = new controller();
			v1.gesUsers();
		});
		$("#btnReception").click(function(){
			$(".envoyes").hide();
			$(".nouveau").hide();
			$(".Compte").hide();
			$(".USERS").hide();
			$(".reception").css({"display":"flex","flex-direction": "column"});
			$("#btnReception").addClass('class1');
			$("#btnEnvoyes").removeClass('class1');
			$("#btnNouveau").removeClass('class1');
			$("#btnCompte").removeClass('class1');
			$("#btnUsers").removeClass('class1');
			$("#i1").removeClass('class2');
			$("#i2").addClass('class2');
			$("#i3").removeClass('class2');
			$("#i4").removeClass('class2');
			$("#i5").removeClass('class2');
			var v1 = new controller();
	       	v1.reception();
		});
		$("#btnEnvoyes").click(function(){
			$(".reception").hide();
			$(".nouveau").hide();
			$(".Compte").hide();
			$(".USERS").hide();
			$(".envoyes").css({"display":"flex","flex-direction": "column"});
			$("#btnNouveau").removeClass('class1');
			$("#btnReception").removeClass('class1');
			$("#btnEnvoyes").addClass('class1');
			$("#btnCompte").removeClass('class1');
			$("#btnUsers").removeClass('class1');
			$("#i1").removeClass('class2');
			$("#i2").removeClass('class2');
			$("#i3").addClass('class2');
			$("#i4").removeClass('class2');
			$("#i5").removeClass('class2');
			var v1 = new controller();
	        v1.messageEnvoiye();
		});
		$(".menu").click(function() {
			$(".menuitems").toggle("fast",function(){
				$(".menuitems").addClass('class3');
				$("#dec").css("align-self", "flex-end");
			});
		});
	});