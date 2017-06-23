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
	    center: {lat: 37.601904, lng: -122.009949},
	    zoom: 18,
	    scrollwheel:  false,
        mapTypeId: 'satellite',
        minZoom: 10, 
	    
	});
    var siteBoundaries = [
          {lat: 37.602698, lng: -122.01041},
          {lat: 37.602588 , lng: -122.010027},
          {lat: 37.602185 , lng:  -122.009209},
          {lat: 37.602079 , lng:  -122.009001},
          {lat:  37.601691 , lng: -122.008916},
          {lat: 37.601512, lng: -122.00947},

          {lat: 37.601369, lng: -122.009448},
          {lat: 37.6013, lng: -122.009956},

          {lat: 37.601224, lng: -122.010087},
          {lat: 37.601445, lng: -122.010178},
          {lat: 37.601632, lng: -122.0103},

          {lat: 37.601909, lng: -122.010547},
          {lat: 37.601828, lng: -122.010695},
          {lat: 37.601957, lng: -122.010818},

          {lat:  37.602215, lng: -122.010783},
          {lat: 37.602251, lng: -122.010596},
          {lat: 37.602615, lng: -122.010805},

          {lat: 37.602698, lng: -122.01041}
        ];


    var line = new google.maps.Polyline({
        path: siteBoundaries,
        visible: true,
        strokeOpacity: 1.0,
        strokeColor: '#FF4730', 
        strokeWeight: 2,
        geodesic: true,
        strokeWeight: 6
        
    });
line.setMap(map);

    var site1 = [
          {lat: 37.602698, lng: -122.01041},
          {lat: 37.602588 , lng: -122.010027},
          {lat: 37.602185 , lng:  -122.009209},
          {lat: 37.602079 , lng:  -122.009001},
          {lat:  37.601691 , lng: -122.008916},
          {lat: 37.601512, lng: -122.00947},

          {lat: 37.601369, lng: -122.009448},
          {lat: 37.6013, lng: -122.009956},

          {lat: 37.601224, lng: -122.010087},
          {lat: 37.601445, lng: -122.010178},
          {lat: 37.601632, lng: -122.0103},

          {lat: 37.601909, lng: -122.010547},
          {lat: 37.601828, lng: -122.010695},
          {lat: 37.601957, lng: -122.010818},

          {lat:  37.602215, lng: -122.010783},
          {lat: 37.602251, lng: -122.010596},
          {lat: 37.602615, lng: -122.010805},

          {lat: 37.602698, lng: -122.01041}
        ];

        var site1 = new google.maps.Polygon({
        	paths: site1,
        	fillColor: '#800000',
        	fillOpacity: 0.35

        });
        site1.setMap(map);

}

window.onload = function () {
    firebase.initializeApp(config);
};

window.onload = function () {
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
		var title = "Tree Number: " + trap_number + '<div> </div>' + " Team Member: " + New_Trees[keys].Initials + '<div></div>';
		var body = " Date Planted: " + month + "/" + day + "/" + year;
		var contents = title + body;
		// console.log(contents);
		// console.log(position);
		addmarkers(position, title, contents, label);
		addyurt();
		// add landmarks function here
	};
}

var urla = "https://tree-registry.firebaseio.com/New_Trees";//link to node in database in the firebase console


var firebaseRefa = new Firebase(urla); //set_up form


//google maps api for map, function called onload
var iconimage = "Images/oak2.png";
var yurt = "Images/yurt2.png";

function addmarkers(positionval, title, content, label){
	var marker = new google.maps.Marker({
	  position: positionval,
	  map: map,
	  label: label,
	  icon: iconimage

});

	var infowindow = new google.maps.InfoWindow({
	  content: content

	});
	marker.addListener('click', function() {
	  infowindow.open(map, marker);
	});
};

function addyurt(){
	var marker = new google.maps.Marker({
	  position: {lat: 37.602188, lng: -122.009783},
	  map: map,
	  icon:yurt
	});

	var infowindow = new google.maps.InfoWindow({
	  content: "Yurt"

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


















