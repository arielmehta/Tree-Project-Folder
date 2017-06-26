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
	    center: {lat: 37.603055, lng: -122.002771},
	    zoom: 15,
	    scrollwheel:  false,
        mapTypeId: 'satellite',
        minZoom: 15, 
	    
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
        strokeOpacity: 0.6,
        strokeColor: '#FF4730', 
        strokeWeight: 2,
        geodesic: true,
        strokeWeight: 6
        
    });
line.setMap(map);
    
    var outerBoundaries = [
        {lat: 37.681647 , lng: -122.173462},
        {lat: 37.450877 , lng: -122.136383},
        {lat: 37.438884 , lng:  -121.808167},
        {lat: 37.676212 , lng:-121.90567}
        
    ];

    var site1 = [
        {lat: 37.594206, lng: -122.006564},
        {lat:  37.601584 , lng:  -122.014847},
        {lat: 37.60274, lng: -122.013559},
        {lat: 37.6041, lng: -122.015061},
        {lat: 37.605188 , lng:  -122.013645},
        {lat: 37.606174 , lng: -122.011585},
        {lat:  37.606174, lng: -122.010178},
        {lat: 37.60461, lng: -122.009182},
        {lat: 37.606548, lng: -122.004204},
        {lat: 37.60818, lng: -122.001028},
        {lat: 37.607364, lng: -121.99841},
        {lat:  37.606276  , lng: -121.994977},
        {lat: 37.601448  , lng:  -121.992702},
        {lat: 37.598184   , lng:  -121.992102},
        {lat: 37.600156  , lng: -122.000513},
        {lat: 37.599714 , lng: -122.001801}
        
        ];

        var site1 = new google.maps.Polygon({
        	paths: [outerBoundaries, site1],
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#ffffff',
              fillOpacity: 0.35

        });
        site1.setMap(map);

}

window.onload = function () {
	firebase.initializeApp(config);
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
	  title:title,
	  content: content,
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

















