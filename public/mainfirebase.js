var config = {
    apiKey: "AIzaSyCWzr15qQqklFbmI1IyqO6cm6Zdg_8PIFI",
    authDomain: "tree-registry.firebaseapp.com",
    databaseURL: "https://tree-registry.firebaseio.com",
    storageBucket: "tree-registry.appspot.com",
    messagingSenderId: "856800025111"
};


var map;
function initMap() {
	var mapDiv = document.getElementById('map');
	map = new google.maps.Map(mapDiv, {
	    center: {lat: 37.601993, lng: -122.009804},
	    zoom: 19,
	    scrollwheel:  false,
        mapTypeId: 'satellite',
        minZoom: 17
	    
	});
    var siteBoundaries = [
          {lat: 37.602698, lng: -122.01041},
          {lat: 37.602588, lng: -122.010027},
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












// Grid Code Start



var line1 = [
          {lat: 37.500000, lng: -122.009823},
          {lat: 37.690000, lng: -122.009823}
        ];


    var grid1 = new google.maps.Polyline({
        path: line1,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid1.setMap(map);

var line2 = [
          {lat: 37.500000, lng: -122.010023},
          {lat: 37.690000, lng: -122.010023}
        ];


    var grid2 = new google.maps.Polyline({
        path: line2,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid2.setMap(map);

var line3 = [
          {lat: 37.500000, lng: -122.010223},
          {lat: 37.690000, lng: -122.010223}
        ];


    var grid3 = new google.maps.Polyline({
        path: line3,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid3.setMap(map);

var line4 = [
          {lat: 37.500000, lng: -122.010423},
          {lat: 37.690000, lng: -122.010423}
        ];


    var grid4 = new google.maps.Polyline({
        path: line4,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid4.setMap(map);

var line5 = [
          {lat: 37.500000, lng: -122.009623},
          {lat: 37.690000, lng: -122.009623}
        ];


    var grid5 = new google.maps.Polyline({
        path: line5,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid5.setMap(map);

var line6 = [
          {lat: 37.500000, lng: -122.009423},
          {lat: 37.690000, lng: -122.009423}
        ];


    var grid6 = new google.maps.Polyline({
        path: line6,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid6.setMap(map);

var line7 = [
          {lat: 37.500000, lng: -122.009223},
          {lat: 37.690000, lng: -122.009223}
        ];


    var grid7 = new google.maps.Polyline({
        path: line7,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid7.setMap(map);

var line8 = [
          {lat: 37.500000, lng: -122.009023},
          {lat: 37.690000, lng: -122.009023}
        ];


    var grid8 = new google.maps.Polyline({
        path: line8,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid8.setMap(map);

var line9 = [
          {lat: 37.500000, lng: -122.010623},
          {lat: 37.690000, lng: -122.010623}
        ];


    var grid9 = new google.maps.Polyline({
        path: line9,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid9.setMap(map);

var line10 = [
          {lat: 37.500000, lng: -122.010823},
          {lat: 37.690000, lng: -122.010823}
        ];


    var grid10 = new google.maps.Polyline({
        path: line10,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid10.setMap(map);

var line11 = [
          {lat: 37.500000, lng: -122.008823},
          {lat: 37.690000, lng: -122.008823}
        ];


    var grid11 = new google.maps.Polyline({
        path: line11,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid11.setMap(map);









var line12 = [
          {lat: 37.601499, lng: -121.000000},
          {lat: 37.601499, lng: -122.108823}
        ];


    var grid12 = new google.maps.Polyline({
        path: line12,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid12.setMap(map);

var line13 = [
          {lat: 37.601699, lng: -121.000000},
          {lat: 37.601699, lng: -122.108823}
        ];


    var grid13 = new google.maps.Polyline({
        path: line13,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid13.setMap(map);

var line14 = [
          {lat: 37.601899, lng: -121.000000},
          {lat: 37.601899, lng: -122.108823}
        ];


    var grid14 = new google.maps.Polyline({
        path: line14,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid14.setMap(map);

var line15 = [
          {lat: 37.602099, lng: -121.000000},
          {lat: 37.602099, lng: -122.108823}
        ];


    var grid15 = new google.maps.Polyline({
        path: line15,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid15.setMap(map);

var line16 = [
          {lat: 37.602299, lng: -121.000000},
          {lat: 37.602299, lng: -122.108823}
        ];


    var grid16 = new google.maps.Polyline({
        path: line16,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid16.setMap(map);

var line17 = [
          {lat: 37.601299, lng: -121.000000},
          {lat: 37.601299, lng: -122.108823}
        ];


    var grid17 = new google.maps.Polyline({
        path: line17,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid17.setMap(map);

var line18 = [
          {lat: 37.601099, lng: -121.000000},
          {lat: 37.601099, lng: -122.108823}
        ];


    var grid18 = new google.maps.Polyline({
        path: line18,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid18.setMap(map);

var line19 = [
          {lat: 37.600899, lng: -121.000000},
          {lat: 37.600899, lng: -122.108823}
        ];


    var grid19 = new google.maps.Polyline({
        path: line19,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid19.setMap(map);

var line20 = [
          {lat: 37.600699, lng: -121.000000},
          {lat: 37.600699, lng: -122.108823}
        ];


    var grid20 = new google.maps.Polyline({
        path: line20,
        visible: true,
        strokeOpacity: 0.4,
        strokeColor: 'white', 
        geodesic: true,
        strokeWeight: 2
        
    });
grid20.setMap(map);



// Grid Code End







    
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

// window.onload = function () {
// 	firebase.initializeApp(config);
// 	for (var keys in New_Trees){
// 		trap_number = trap_number + 1;
// 		console.log(trap_number);
// 		var lt = New_Trees[keys].Latitude;
// 		var lg = New_Trees[keys].Longitude; 
// 		var latitude = Number(lt);
// 		var longitude = Number(lg);
// 		var position = {lat: latitude, lng: longitude}; 
// 		var month = New_Trees[keys].Start_Month;
// 		var day = New_Trees[keys].Start_Day;
// 		var year = New_Trees[keys].Start_Year;
// 		var initials = New_Trees[keys].Initials;
// 		var label = initials.toString();
// 		var adcom = New_Trees[keys].Additional_comments;
// 		var species = New_Trees[keys].Species;
// 		var iconm = species;
// 		var diameter = New_Trees[keys].Diameter;
// 		var height = New_Trees[keys].Height;
// 		var Adcom = "Tree Species: "+ species +'<div> </div>'
// 		+"Tree Diameter: "+ diameter + " cm"+'<div> </div>'
// 		+"Tree Height: "+ height +" m"+ '<div> </div>'
// 		+ "Comments: " + adcom;
// 		var title = "Tree Number: " + trap_number + '<div> </div>' + " Planted By: " + New_Trees[keys].Initials + '<div></div>';
// 		var body = " Date Planted: " + month + "/" + day + "/" + year+ '<div> </div>';
// 		var contents = title + body + '<div> </div>' + Adcom + '<div> </div>';
		// console.log(contents);
		// console.log(position);
		// addmarkers(position, title, contents, iconm);
		// addyurt();
		// add landmarks function here
	// };

var trap_number = -1;
  window.onload = function () {
  firebase.initializeApp(config);
  for (var keys in New_Trees){
    trap_number = trap_number + 1;
    console.log(trap_number);


    var name = New_Trees[keys][1];
    var email = New_Trees[keys][2];
    var treenumber = New_Trees[keys][3];
    var species = New_Trees[keys][4];
    var diameter = New_Trees[keys][5];
    var height = New_Trees[keys][6];
    var date = New_Trees[keys][7];
    var lt = New_Trees[keys][8];
    var lg = New_Trees[keys][9];
    var color = New_Trees[keys][10];
    var shape = New_Trees[keys][12];
    var ad_comm = New_Trees[keys][13];
    var pic = New_Trees[keys][14];

    var str = "Click to View Image";
    var result = str.link(pic);

    var title = "Tree Number: " + trap_number + '<div> </div>' + " Planted By: " + name + '<div></div>';
    var picture = pic;
    var body = " Date Planted: " + date +  '<div> </div>';
    var Adcom = "Tree Species: "+ species +'<div> </div>'
   +"Tree Diameter: "+ diameter + " cm"+'<div> </div>'
   +"Tree Height: "+ height +" m"+ '<div> </div>'
   + "Comments: " + ad_comm + '<div> </div>' + "Image Link: " + result;
    var contents = title + body + '<div> </div>' + Adcom + '<div> </div>';
    


    var iconm = species;

    var position = {lat: lt, lng: lg};
    console.log(position);

    addmarkers(position, title, contents, iconm);
    addyurt();
    // add landmarks function here
    
    


  };
}

var urla = "https://tree-registry.firebaseio.com/New_Trees";//link to node in database in the firebase console


var firebaseRefa = new Firebase(urla); //set_up form


//google maps api for map, function called onload
var yurt = "Images/yurt2.png";

	// var CoastLiveOak= "Images/CoastLiveOak.png";
	// var ValleyOak= "Images/ValleyOak.png";
	// var BlueOak = "Images/BlueOak.png";
	// var BlackOak = "Images/BlackOak.png"; 
	// var BlackWalnut= "Images/BlackWalnut.png";
	// var BigLeafMaple= "Images/BigLeafMaple.png";
	// var CaliforniaBayLaurel = "Images/CaliforniaBayLaurel.png";
	// var WesternSycamore= "Images/WesternSycamore.png"; 
	// var FremontCottonwood= "Images/FremontCottonwood.png";
	// var RedBud= "Images/RedBud.png";
	// var BlueElderberry= "Images/BlueElderberry.png";
	// var HollyleafCherry= "Images/HollyleafCherry.png";
	// var Other= "Images/Other.png";


var iconbase = 'Images/';


function addmarkers(positionval, title, content, iconm){	
	var marker = new google.maps.Marker({
	  position: positionval,
	  title:title,
	  content: content,
	  map: map,
	  icon: iconbase + iconm + '.png'

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
	var species = document.getElementById('species').value;
	var diameter = document.getElementById('diameter').value;
	var height = document.getElementById('height').value;
	var start_date_month = document.getElementById('datemonth').value;
	var start_date_day = document.getElementById('dateday').value;
	var start_date_year = document.getElementById('dateyear').value;
	var latitude = document.getElementById('lat').value;
	var longitude = document.getElementById('long').value;
	var adcom = document.getElementById('adcom').value;

	var postRef= firebaseRefa.push();// creating form submission id
	postRef.set({                  //creating children data for each form submission
		Initials: initials,
		Species: species,
		Diameter: diameter,
		Height: height,
		Start_Month: start_date_month,  
		Start_Day: start_date_day, 
		Start_Year: start_date_year,
		Latitude: latitude,
		Longitude: longitude,
		Additional_comments: adcom
		}); 
}

var New_Trees = {};

firebaseRefa.on('value', function(snapshot){
	New_Trees = snapshot.val();
});
















