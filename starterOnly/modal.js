var app = {

  // DOM Elements
  modalbg : document.querySelector(".bground"), // le fond du formulaire
  modalBtn : document.querySelectorAll(".modal-btn"), /// bouton d'appel de la modal (s'inscrire)
  modalClose : document.querySelector(".close"), //La croix qui ferme la modale
  //formData : document.querySelectorAll(".formData"), // récupère tout les div avec label et input
  // Field Error object
  fieldError : {},
  // Input Values
  inputs : {},
  // When the DOM in charged ...
  init : ()=>{
    console.log("init");
    app.fieldListeneurs();
    app.modalBtn.forEach((btn) => btn.addEventListener("click", app.launchModal));
    app.modalClose.addEventListener("click", app.closeModal);
  },

  // Add eventListener to listen out for the form fields and submit event
  fieldListeneurs : ()=>{
    app.first = document.getElementById("first");
    app.first.addEventListener("keyup", ()=>{app.checkField("first")});
    app.last = document.getElementById("last");
    app.last.addEventListener("keyup", ()=>{app.checkField("last")});
    app.email = document.getElementById("email");
    app.email.addEventListener("keyup", ()=>{app.checkField("email")});
    app.tournament = document.getElementById("quantity");
    app.tournament.addEventListener("keyup", ()=>{app.checkField("tournament")});
    app.condition = document.getElementById("checkbox1");
    app.condition.addEventListener("click", ()=>{app.checkField("condition")});
    app.birthdate = document.getElementById("birthdate");
    app.birthdate.addEventListener("keyup", ()=>{app.checkField("birthdate")});
    document.getElementById("myform").addEventListener("submit",app.submit);
  },

  // Checks the fields
  checkField : (field)=>{       
    switch(field){
      // first Field  
      case 'first':
        app.inputs.first = app.first.value; 
        // if there is less than 2 character           
        if(app.inputs.first.length < 2){
          if(!app.fieldError.first){
            let errorMessage = document.createElement("p");
            errorMessage.setAttribute("id","firstError");
            errorMessage.className = "errorMessageForm";
            errorMessage.innerText = "Le nombre de caractères doit être supérieur à 1";
            app.first.parentNode.append(errorMessage);
            app.fieldError.first = true;
          }  
        // if there is a bad character
        }else{
          if(app.inputs.first.match(/[^A-Za-zà-ż]/)){
            if(!app.fieldError.first){
              let errorMessage = document.createElement("p");
              errorMessage.setAttribute("id","firstError");
              errorMessage.className = "errorMessageForm";
              errorMessage.innerText = "Seules les lettres sont autorisées";
              app.first.parentNode.append(errorMessage);
              app.fieldError.first = true;
            }else{
              document.getElementById("firstError").innerText ="Seules les lettres sont autorisées"
            } 
          // if all is good          
          }else{
            app.fieldError.first = false;
            if(document.getElementById("firstError")) document.getElementById("firstError").remove();                         
          }
        }
        break
      // last field
      case 'last':
        app.inputs.last = app.last.value;             
        // if there is less than 2 character
        if(app.inputs.last.length < 2){
          if(!app.fieldError.last){
            let errorMessage = document.createElement("p");
            errorMessage.setAttribute("id","lastError");
            errorMessage.className = "errorMessageForm";
            errorMessage.innerText = "Le nombre de caractères doit être supérieur à 1";
            app.last.parentNode.append(errorMessage);
            app.fieldError.last = true;           
          }   
        // if there is a bad character         
        }else{
          if(app.inputs.last.match(/[^a-zA-Z]/)){
            if(!app.fieldError.last){
              let errorMessage = document.createElement("p");
              errorMessage.setAttribute("id","lastError");
              errorMessage.className = "errorMessageForm";
              errorMessage.innerText = "Seules les lettres sont autorisées";
              app.last.parentNode.append(errorMessage);
              app.fieldError.last = true;
            }else{
              document.getElementById("lastError").innerText ="Seules les lettres sont autorisées"
            }
          // if all is good             
          }else{
            app.fieldError.last = false;
            if(document.getElementById("lastError")) document.getElementById("lastError").remove();       
          }
        }
        break
      // email field
      case 'email':
        app.inputs.email = app.email.value;             
        // if not match with email pattern
        if(!app.inputs.email.match(/^[a-zA-Z0-9]+[\._-]{0,}[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,}$/)){ 
          if(!app.fieldError.email){
            let errorMessage = document.createElement("p");
            errorMessage.setAttribute("id","emailError");
            errorMessage.className = "errorMessageForm";
            errorMessage.innerText = "Veuillez saisir une adresse email correcte.";
            app.email.parentNode.append(errorMessage);
            app.fieldError.email = true;           
          }            
        }else{          
          app.fieldError.email = false;
          if(document.getElementById("emailError")) document.getElementById("emailError").remove();       
        }
        break
      // tournament field
      case 'tournament':
        app.inputs.tournament = app.tournament.value;             
        // if there is no numbers
        if(!app.inputs.tournament.match(/[0-9]+/)){ 
          if(!app.fieldError.tournament){
            let errorMessage = document.createElement("p");
            errorMessage.setAttribute("id","tournamentError");
            errorMessage.className = "errorMessageForm";
            errorMessage.innerText = "Veuillez saisir des caractères numériques.";
            app.tournament.parentNode.append(errorMessage);
            app.fieldError.tournament = true; 
          }      
        // if all is good       
        }else{          
          app.fieldError.tournament = false;
          if(document.getElementById("tournamentError")) document.getElementById("tournamentError").remove();
        }
        break
      // Condition checking
      case 'condition':        
        app.inputs.conditions = app.condition.checked; 
        // if is not checked
        if(!app.condition.checked){ 
          if(!app.fieldError.condition){
            let errorMessage = document.createElement("p");
            errorMessage.setAttribute("id","conditionError");
            errorMessage.className = "errorMessageForm";
            errorMessage.innerText = "Veuillez accepter les conditions d'utilisation.";
            app.condition.parentNode.append(errorMessage);
            app.fieldError.condition = true; 
          }      
        // if all is good         
        }else{          
          app.fieldError.condition = false;
          if(document.getElementById("conditionError")) document.getElementById("conditionError").remove();       
        }
        break
      // Birth date
      case 'birthdate':        
        app.inputs.birthdate = app.birthdate.value;
        // if is empty
        if(!app.inputs.birthdate){ 
          if(!app.fieldError.birthdate){
            let errorMessage = document.createElement("p");
            errorMessage.setAttribute("id","birthdateError");
            errorMessage.className = "errorMessageForm";
            errorMessage.innerText = "Veuillez entrer votre date de naissance";
            app.birthdate.parentNode.append(errorMessage);
            app.fieldError.birthdate = true; 
          }      
        // if all is good         
        }else{          
          app.fieldError.birthdate = false;
          if(document.getElementById("birthdateError")) document.getElementById("birthdateError").remove();       
        }
        break
      default :
        console.log("error");
    }
  },

  // On submit
  submit : ()=>{
    event.preventDefault();
    // final chek if mistakes
    app.checkField("first");
    app.checkField("last");
    app.checkField("email");
    app.checkField("tournament");
    app.checkField("condition");
    app.checkField("birthdate");
    let compt = 0;
    for(let property in app.fieldError){
      if(app.fieldError[property]) compt ++;
    }
    // if all is good, recover the other datas
    if(compt == 0){
      app.inputs.citytournament = document.querySelector('input[name=location]:checked').value;
      app.inputs.nexevent = document.getElementById("checkbox2").checked;
      for(let property in app.inputs){
        console.log(property +" : "+ app.inputs[property]);
      }
      app.displayValidation();
    }
  },

  // Display validation message
  displayValidation : ()=>{
    document.getElementById("myform").style.display = "none";
    let validationMessage = document.createElement("p");
    validationMessage.setAttribute("id","validationMessage");
    validationMessage.className = "validationMessage";
    validationMessage.innerText = "Vos données ont bien été envoyées";
    app.birthdate.parentNode.append(validationMessage);
    document.querySelector(".content").append(validationMessage);
  },

  // launch modal form
  launchModal : ()=>{
    app.modalbg.style.display = "block";
    document.getElementById("myform").style.display = "initial";
  },

  // close modal form
  closeModal : ()=>{
    document.getElementById("myform").reset();
    if(document.getElementById("validationMessage")) document.getElementById("validationMessage").remove();
    app.modalbg.style.display = "none";
  },

  // Shows and hides mobile menu
  editNav : ()=>{
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}

document.addEventListener("DOMContentLoaded", app.init);