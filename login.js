

  var config = {
    apiKey: "AIzaSyCWzr15qQqklFbmI1IyqO6cm6Zdg_8PIFI",
    authDomain: "tree-registry.firebaseapp.com",
    databaseURL: "https://tree-registry.firebaseio.com",
    storageBucket: "tree-registry.appspot.com",
    messagingSenderId: "856800025111"
  };
  firebase.initializeApp(config);


var uiConfig = {
    'signInSuccessUrl': 'EnterData1.html',
    'signInOptions': [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

 window.onload= function(){
    firebase.initializeApp(config);    
    firebaseInit();
 };


function firebaseInit() {
	console.log("here");
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) { // User is signed in.
            user = user;
            console.log(user);
            user.getToken().then(function(accessToken) {
                console.log('signed in');
            });
        } else { // User is signed out.
            user = null;
            console.log('signed out');
        }
    }, function(error) {
        console.log(error);
    });
};

function googleSignout() {
    // sign out 
   firebase.auth().signOut()
   // redirect to login page

   //  tell me in console if it worked
   .then(function() {
        window.location = "login.html";
        console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}




