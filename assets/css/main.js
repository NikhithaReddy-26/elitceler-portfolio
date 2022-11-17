const firebaseConfig = {
    apiKey: "AIzaSyBu2Sdpt5bpC-3xf1gujcoDZc5R1aO7P8I",
    authDomain: "elitceler-portfolio.firebaseapp.com",
    databaseURL: "https://elitceler-portfolio-default-rtdb.firebaseio.com",
    projectId: "elitceler-portfolio",
    storageBucket: "elitceler-portfolio.appspot.com",
    messagingSenderId: "742592825110",
    appId: "1:742592825110:web:d81fd46833b55feaeb3237",
    measurementId: "G-JEE873NTGG"
  };
  firebase.initializeApp(firebaseConfig);
  
  
  var messagesRef = firebase.database().ref('messages');
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    saveMessage(name, email, message);

    // document.querySelector('.alert').style.display = 'none';
 
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    document.getElementById('contact-form').reset();
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }