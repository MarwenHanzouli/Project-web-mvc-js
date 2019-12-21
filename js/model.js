function user(id,nom, prenom, email,password,privilege,picture) {
	this.id=id;
  this.nom = nom;
  this.prenom = prenom;
  this.email= email;
   this.password= password;
   this.picture=picture;
   this.privilege= privilege;
}

user.prototype.listeUsers = function() {
	
  var monobjet_json = localStorage.getItem("bd");
var monobjet = JSON.parse(monobjet_json);
 
    
    return monobjet;
 
};
user.prototype.find = function(email) {
	
  var monobjet_json = localStorage.getItem("bd");
var monobjet = JSON.parse(monobjet_json);
      var rech= null ;
    for (var i = 0; i <monobjet.length; i++) {
             if(monobjet[i].email==email)
             	{rech = monobjet[i];
             	}

             }
     
 return rech;
};
user.prototype.findid = function(id) {
	
  var monobjet_json = localStorage.getItem("bd");
var monobjet = JSON.parse(monobjet_json);
      var rech= null ;
    for (var i = 0; i <monobjet.length; i++) {
             if(monobjet[i].id==id)
             	{rech = monobjet[i];
             	}

             }
     
 return rech;
};
user.prototype.insert = function(newUser) {
	
  var monobjet_json = localStorage.getItem("bd");
var monobjet = JSON.parse(monobjet_json);
      monobjet[monobjet.length]= newUser ;
      localStorage.removeItem("bd");
    monobjet_json = JSON.stringify(monobjet);
localStorage.setItem("bd",monobjet_json);

};
user.prototype.modifie = function(id,modifieUser) {
	
  var monobjet_json = localStorage.getItem("bd");
var monobjet = JSON.parse(monobjet_json);
      
    for (var i = 0; i <monobjet.length; i++) {
             if(monobjet[i].id==id)
             	{ monobjet[i] = modifieUser ;
             	}

             }
     
 localStorage.removeItem("bd");
    monobjet_json = JSON.stringify(monobjet);
localStorage.setItem("bd",monobjet_json);
//alert("modifie");
};
user.prototype.supprimerUser = function(id) {
	
  var monobjet_json = localStorage.getItem("bd");
var monobjet = JSON.parse(monobjet_json);
      var j = -1;
      
      var newobjet = new Array();
    for (var i = 0; i <monobjet.length; i++) {
             if(monobjet[i].id !== id)
             	{ 
             		j++;
             		
             		newobjet[j] = monobjet[i] ;
             		
             		
             	}
             }
             localStorage.removeItem("bd");
    monobjet_json = JSON.stringify(newobjet);
localStorage.setItem("bd",monobjet_json);
             	//alert("supprimerUser");

 };

function message(id,objet,sujet,id_em,id_des) {
  this.id = id;
  this.objet = objet;
  this.sujet = sujet;
  this.id_em = id_em;
  this.id_des = id_des;
  
}

message.prototype.listeMessage = function() {
	
  var monobjet_json = localStorage.getItem("msgs");
var monobjet = JSON.parse(monobjet_json);
 
    
    return monobjet;
 
};
message.prototype.idMessage = function(id_emp,id_desp) {
	
  var monobjet_json = localStorage.getItem("msgs");
var monobjet = JSON.parse(monobjet_json);
      var j = -1;
      //alert(monobjet);
      
      var newobjet = new Array();

    for (var i = 0; i <monobjet.length; i++) {
             if((monobjet[i].id_em === id_emp) && (monobjet[i].id_des === id_desp))
             	{ 
             		j++;
             		
             		newobjet[j] = monobjet[i] ;
             		
             		
             	}
             }
            
   return newobjet;

 };
message.prototype.insertMessage = function(newMessage) {
	
  var monobjet_json = localStorage.getItem("msgs");
var monobjet = JSON.parse(monobjet_json);
 
      monobjet[monobjet.length]= newMessage ;
      localStorage.removeItem("msgs");
    monobjet_json = JSON.stringify(monobjet);
localStorage.setItem("msgs",monobjet_json);

};
message.prototype.supprimerMessage = function(id) {
	//alert(id);
  var monobjet_json = localStorage.getItem("msgs");
var monobjet = JSON.parse(monobjet_json);
//alert(monobjet);
      var j = -1;
      
      var newobjet = new Array();
    for (var i = 0; i <monobjet.length; i++) {
             if(monobjet[i].id != id)
             	{ //alert(monobjet[i].id);
             		j++;
             		
             		newobjet[j] = monobjet[i] ;
             		
             		
             	}
             }
             localStorage.removeItem("msgs");
    monobjet_json = JSON.stringify(newobjet);
localStorage.setItem("msgs",monobjet_json);
             	//alert("supprimerUser");

 };
 message.prototype.MessageidUser = function(id_user) {
	
  var monobjet_json = localStorage.getItem("msgs");
var monobjet = JSON.parse(monobjet_json);

      var j = -1;
      
      var newobjet = new Array();
    for (var i = 0; i <monobjet.length; i++) {
             if(monobjet[i].id_em === id_user || monobjet[i].id_des===id_user)
             	{ 
             		j++;
             		
             		newobjet[j] = monobjet[i] ;
             		
             		
             	}
             }
             return newobjet;

 };