function controller(nom) {
  this.nom = nom;
  
}
controller.prototype.authentification = function(login,password) {
  
  

 var v1 = new user();
 //var test = v1.find(login);
 $.ajax(
            { 
              "url": "http://localhost:8000/api/connexion/",
              "data": {
              "email" : login,
              "password" : password,
                      },
               "type" : "POST",
               "success" : alert("Utilisateur récuperé")
               //"error" : //alert("Utilisateur n'existe pas")
            }
        ).done(function(data){
          //alert(data['privilege']);
          var v1 = new user(data['id'],data['lastname'],data['firstname'],data['email'],data['password'],data['privilege'],data['picture']);
      
          var monobjet_json = JSON.stringify(v1);
         localStorage.setItem("auth",monobjet_json);
         location.replace("./accueil.html");
        })
        .fail(function() {
          $('.zone_error').html('<p class="error">vérifier vos doneés</p>');
        });
 
 /*if(test!==null)
 {

    if(test.password===password)
    {
   var monobjet_json = JSON.stringify(test);
  localStorage.setItem("auth",monobjet_json);
  if(test.privilege==='a')
    {alert('admin');
       $('#btnUsers').html('<i id="i3" class="fa fa-send"></i>Messages envoyés</p>');
        } 
  location.replace("./accueil.html");
  if(test.privilege==='a')
    alert('j');  

  }
  else
    $('.zone_error').html('<p class="error">vérifier vos doneés</p>');

 	

 }
 else
 {
 	$('.zone_error').html('<p class="error">vérifier vos doneés</p>');
 }
 
 */

};
controller.prototype.compte = function() {
 var monobjet_json = localStorage.getItem("auth");
var monobjet = JSON.parse(monobjet_json);
$('#nom').val(monobjet.nom);
$('#prenom').val(monobjet.prenom);
$('#email').val(monobjet.email);
}
controller.prototype.modifierUser = function() {

 var monobjet_json = localStorage.getItem("auth");
var monobjet = JSON.parse(monobjet_json);
var u1 = new user();
monobjet.nom=$('#nom').val();
monobjet.prenom=$('#prenom').val();
monobjet.email=$('#email').val();
 
         $.ajax(
            { 
              "url": "http://localhost:8000/api/utilisateurs/5cf40608b78474035c5271ce",
              "data": {
              "email": monobjet['email'],
          "firstname" : monobjet['prenom'],
          "lastname" : monobjet['nom'],
          "password": monobjet['nom'],
          "picture": monobjet['nom'],
               },
               "type" : "PUT",
               "success" : alert("Modification effectuée"),
               "error" : alert("Erreur de modifcation")
            }
        ); // ajax()
      
u1.modifie(monobjet.id,monobjet);
localStorage.removeItem("auth");
    monobjet_json = JSON.stringify(monobjet);
localStorage.setItem("auth",monobjet_json);
}

controller.prototype.deconexion = function() {
  localStorage.removeItem("auth");
  location.replace("./authentification.html");
};
controller.prototype.gesUsers = function() {
  //alert("ges");
  
  var u1 = new user();
   var users = u1.listeUsers();
  var ch='';
  for (var i=0; i<users.length; i++)
{
  if(users[i].privilege==='u')
ch+='<tr><td >'+users[i].nom+'</td><td><button class="h" id="'+users[i].id+'"><i class="fa fa-trash"></i></button></td></tr>';}


 $('.coeurUSERS').html(ch);
};
controller.prototype.supUser = function(id) {
 var u1 = new user();
 var idUt ="5cf40608b78474035c5271cd";
 //alert(idUt);

         $.ajax(
            { 
               "url": "http://localhost:8000/api/utilisateurs/"+idUt,
               "type" : "DELETE",
               "success" : alert("Utilisateur supprimé")
               //"error" : //alert("Echec de suppression!")
            }
        ); // ajax()
      
u1.supprimerUser(id);
 this.gesUsers();
 
};
controller.prototype.nouveauMessage = function(objet,sujet,login) {
  
  var monobjet_json = localStorage.getItem("auth");
var monobjet = JSON.parse(monobjet_json);

 var u1 = new user();
var des = u1.find(login);
var id = Math.random() * Math.floor(50);
 var m1 = new message(id,objet,sujet,monobjet.id,des.id);
 $.ajax(
            { 
              "url": "http://localhost:8000/api/envoyer/",
              "data": {
              "objet" : objet,
              "sujet" : sujet,
              "piece" : sujet,
              "lu" : false,
              "idEmetteur" : monobjet.id,
              "idRecepteur" :des.id
                       },
               "type" : "post",
               "success" : alert("Message envoyé")
               //"error" : //alert("Echec d'envoi!")
            }
        ); // ajax()
 m1.insertMessage(m1);
 location.replace("./accueil.html");
};
controller.prototype.suppMessage = function(id) {
 var m1 = new message();
 var idMsg ="5cf2bd6cd9da4d0119013072";
 //alert("bnj");
 $.ajax(
            { 
               "url": "http://localhost:8000/api/messages/"+idMsg,
               "type" : "DELETE",
               "success" : alert("Message supprimé")
               //"error" : //alert("Echec de suppression!")
            }
        ); // ajax()
 m1.supprimerMessage(id);
 location.replace("./accueil.html");
 
};
controller.prototype.nvMessage = function(email='e') {

 var u1 = new user();
    var listeUsers = u1.listeUsers();
    ch='';
  for (var i = 0; i <listeUsers.length; i++) {
       if(listeUsers[i].nom.indexOf(email)!==-1)
         
        ch += '<option value="' + listeUsers[i].email + '"></option>';


        }
    
   $('#contacts').html(ch);
  

 
};
controller.prototype.messageEnvoiye = function() {
 var monobjet_json = localStorage.getItem("auth");
var monobjet = JSON.parse(monobjet_json);
var m1 = new message();
  var u1 = new user();
  var tab = m1.MessageidUser(monobjet.id);
  var ch='';
  for (var i=(tab.length-1); i>=0; i--)
{
  if(monobjet.id===tab[i].id_em)
   ch+='<tr><td class="elm_tab">'+tab[i].objet+'</td><td style="align:center;"><i class="fa fa-trash" ></i></td></tr>';
}
 $('.coeur2').html(ch);
};
controller.prototype.reception = function() {
 var monobjet_json = localStorage.getItem("auth");
var monobjet = JSON.parse(monobjet_json);
var m1 = new message();
  var u1 = new user();
  var tab = m1.MessageidUser(monobjet.id);
  var ch='';
  for (var i=(tab.length-1); i>=0; i--)
{
   ch+='<tr><td id="'+tab[i].id+'">'+tab[i].objet+'</td><td><i class="fa fa-trash"></i></td></tr>';
}
 $('.coeur').html(ch);
};

controller.prototype.bd = function() {
  localStorage.clear();
  $.ajax({
  url: 'http://localhost:8000/api/utilisateurs/',
  dataType: 'json',
  success: function(data) {
    var table = new Array();
    

    var nb_users=4;
    for (var i = 0; i <=nb_users; i++) {
      var v1 = new user(data[i].id,data[i].lastname,data[i].firstname,data[i].email,data[i].password,data[i].privilege,data[i].picture);
      
      table[i]=v1;
     

    }
     
   var monobjet_json = JSON.stringify(table);
localStorage.setItem("bd",monobjet_json);


    


  }
});
  $.ajax({
  url: 'http://localhost:8000/api/messages/',
  dataType: 'json',
  success: function(data) {
    
    var msgs = new Array();

    var nb_users=4;
    for (var i = 0; i <=nb_users; i++) {
      
      var v2 = new message(data[i].id,data[i].objet,data[i].sujet,data[i].idEmetteur,data[i].idRecepteur);
      msgs[i]=v2;

    }
     
    var monobjet_json2 = JSON.stringify(msgs);
localStorage.setItem("msgs",monobjet_json2);


  }
});




};