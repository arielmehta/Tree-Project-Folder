var config = {
    apiKey: "AIzaSyCWzr15qQqklFbmI1IyqO6cm6Zdg_8PIFI",
    authDomain: "tree-registry.firebaseapp.com",
    databaseURL: "https://tree-registry.firebaseio.com",
    storageBucket: "tree-registry.appspot.com",
    messagingSenderId: "856800025111"
};

var trap_number = 0;
var map;
function initMap() {
	var mapDiv = document.getElementById('map');
	map = new google.maps.Map(mapDiv, {
	    center: {lat: 37.557419, lng: -121.989398},
	    zoom: 13
	});
}
window.onload= function(){
    firebase.initializeApp(config);
};

window.onload= function(){
	for (var keys in New_Trees){
		trap_number = trap_number + 1;
		console.log(trap_number);
		var lt = New_Trees[keys].Latitude;
		var lg = New_Trees[keys].Longitude;
		var latitude = Number(lt);
		var longitude = Number(lg);
		var position = {lat: latitude, lng: longitude};
		var month = New_Trees[keys].Start_Month;
		var day = New_Trees[keys].Start_Day;
		var year = New_Trees[keys].Start_Year;
		var initials = New_Trees[keys].Initials;
		var label = initials.toString();
		var title = "Trap Number: " + trap_number + '<div> </div>' + " Team Member: " + New_Trees[keys].Initials + '<div></div>';
		var body = " Date Placed: " + month + "/" + day + "/" + year;
		var contents = title + body;
		// console.log(contents);
		// console.log(position);
		addmarkers(position, title, contents, label);
	};
}

var urla = "https://tree-registry.firebaseio.com/New_Trees";//link to node in database in the firebase console


var firebaseRefa = new Firebase(urla); //set_up form


//google maps api for map, function called onload
function addmarkers(positionval, title, content, label){
	var marker = new google.maps.Marker({
	  position: positionval,
	  map: map,
	  title: title,
	  label: label
});
	var infowindow = new google.maps.InfoWindow({
	  content: content
	});
	marker.addListener('click', function() {
	  infowindow.open(map, marker);
	});
};


function writeStartUserData(){
	console.log("writing data");
	var initials = document.getElementById('initials').value;
	var name = document.getElementById('name').value;
	var start_date_month = document.getElementById('datemonth').value;
	var start_date_day = document.getElementById('dateday').value;
	var start_date_year = document.getElementById('dateyear').value;
	var latitude = document.getElementById('lat').value;
	var longitude = document.getElementById('long').value;

	var postRef= firebaseRefa.push();// creating form submission id
	postRef.set({                  //creating children data for each form submission
		Initials: initials,
		Full_Name: name,
		Start_Month: start_date_month,  
		Start_Day: start_date_day, 
		Start_Year: start_date_year,
		Latitude: latitude,
		Longitude: longitude  
		}); 
}

var New_Trees = {};

firebaseRefa.on('value', function(snapshot){
	New_Trees = snapshot.val();
});



















