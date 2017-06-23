var config = {
    apiKey: "AIzaSyCWzr15qQqklFbmI1IyqO6cm6Zdg_8PIFI",
    authDomain: "tree-registry.firebaseapp.com",
    databaseURL: "https://tree-registry.firebaseio.com",
    storageBucket: "tree-registry.appspot.com",
    messagingSenderId: "856800025111"
};


var uiConfig = {
    'signInSuccessUrl': 'EnterData2.html',
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
            var user = firebase.auth().currentUser;
            var name, email, photoUrl, uid, emailVerified;

            if (user != null) {
              name = user.displayName;
              email = user.email;
              photoUrl = user.photoURL;
              emailVerified = user.emailVerified;
              uid = user.uid;
            }
            console.log(name);
            console.log(email);
            console.log(photoUrl);

            var postRef= firebaseRefb.push();// creating form submission id
                postRef.set({     //creating children data for each form submission
                    username: name,
                    user: uid,
                    email: email,
                    profile_picture : photoUrl
                }); 
                console.log('done');

        var New_Trees = {};

        firebaseRefa.on('value', function(snapshot){
            New_Trees = snapshot.val();
        });               
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