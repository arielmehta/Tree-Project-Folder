var trap_number = 0;
var map;
function initMap() {
	var mapDiv = document.getElementById('map');
	map = new google.maps.Map(mapDiv, {
	    center: {lat: 37.557419, lng: -121.989398},
	    zoom: 13
	});
}
  var config = {
    apiKey: "AIzaSyCWzr15qQqklFbmI1IyqO6cm6Zdg_8PIFI",
    authDomain: "tree-registry.firebaseapp.com",
    databaseURL: "https://tree-registry.firebaseio.com",
    storageBucket: "tree-registry.appspot.com",
    messagingSenderId: "856800025111"
  };
 window.onload= function(){
 	firebase.initializeApp(config);	
 };
window.onload= function(){
	for (var keys in Trap_Setup_Form){
		trap_number = trap_number + 1;
		console.log(trap_number);
		var lt = Trap_Setup_Form[keys].Latitude;
		var lg = Trap_Setup_Form[keys].Longitude;
		var latitude = Number(lt);
		var longitude = Number(lg);
		var position = {lat: latitude, lng: longitude};
		var month = Trap_Setup_Form[keys].Start_Month;
		var day = Trap_Setup_Form[keys].Start_Day;
		var year = Trap_Setup_Form[keys].Start_Year;
		var initials = Trap_Setup_Form[keys].Initials;
		var label = initials.toString();
		var title = "Trap Number: " + trap_number + '<div> </div>' + " Team Member: " + Trap_Setup_Form[keys].Initials + '<div></div>';
		var body = " Date Placed: " + month + "/" + day + "/" + year;
		var contents = title + body;
		// console.log(contents);
		// console.log(position);
		addmarkers(position, title, contents, label);
	};
}

var urla = "https://zika-project-f48f8.firebaseio.com/Trap_Setup_Form";
var urlb = "https://zika-project-f48f8.firebaseio.com/Trap_Setup_Form2";
var urlc = "https://zika-project-f48f8.firebaseio.com/Trap_Setup_Form3";
var urld = "https://zika-project-f48f8.firebaseio.com/Egg_Data_Form";


var url = "https://zika-project-f48f8.firebaseio.com/Trap_Collection_Form";

var firebaseRefa = new Firebase(urla); //first trap set_up form
var firebaseRefb = new Firebase(urlb); // second trap setup form
var firebaseRefc = new Firebase(urlc); // third trap setup form
var firebaseRefd = new Firebase(urld); // egg data found form


var firebaseReff = new Firebase(url); // old version for Trap_Collection_Form

//google maps api for home page trap map, function called onload
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

function writeUserData(){
	console.log("here");
	var trap_type = document.getElementById('trap_type').value; //User Input
	var Date_Set = document.getElementById('Date_Set').value; //User Input
	var Position_Type = document.getElementById('Position_Type').value; //User Input
	var Trap_Latitude = document.getElementById('Trap_Latitude').value; //User Input
	var Trap_Longitude = document.getElementById('Trap_Longitude').value; //User Input
	var Weather_Data = document.getElementById('Weather_Data').value; //User Input
	var Humidity = document.getElementById('Humidity').value; //User Input
	var Average_Rainfall = document.getElementById('Average_Rainfall').value; //User Input
	var Number_Eggs_Total = document.getElementById('Number_Eggs_Total').value; //User Input
	var Number_Egg_Rafts = document.getElementById('Number_Egg_Rafts').value; //User Input
	var Number_Individual_Eggs = document.getElementById('Number_Individual_Eggs').value; //User Input
	var Egg_Species = document.getElementById('Egg_Species').value; //User Input

	var postRef= firebaseReff.push();// creating form submission id
	postRef.set({                   //creating children data for each form submission
		Trap_type: trap_type,  
		date_Set: Date_Set, 
		position_Type: Position_Type,
		trap_Latitude: Trap_Latitude,
		trap_Longitude: Trap_Longitude,  
		weather_Data: Weather_Data,
		humidity: Humidity,
		average_Rainfall: Average_Rainfall,
		number_Eggs_Total: Number_Eggs_Total,
		number_Egg_Rafts: Number_Egg_Rafts,
		number_Individual_Eggs: Number_Individual_Eggs,
		egg_Species: Egg_Species
		}); 
}

var Trap_Collection_Form = {};

firebaseReff.on('value', function(snapshot){
	Trap_Collection_Form = snapshot.val();
});
  
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

var Trap_Setup_Form = {};

firebaseRefa.on('value', function(snapshot){
	Trap_Setup_Form = snapshot.val();
});


function writeStartUserData2(){
	console.log('is this even working');
	var modifications = document.getElementById('modificationss').value;
	var leaf_added_type = document.getElementById('leaff').value;
	var flower_added_type = document.getElementById('flowerr').value;
	var compost_added_type = document.getElementById('compostt').value;
	var other_natural_modif = document.getElementById('otherr').value;
	var fragrance = document.getElementById('fragrancee').value;
	var human_scents = document.getElementById('clothingg').value;
	var other_synthetic_mod = document.getElementById('otherss').value;
	var color_change = document.getElementById('colorss').value;
	var pattern_change = document.getElementById('patternss').value;

	var postRef= firebaseRefb.push();// creating form submission id
	postRef.set({ 
		Trap_Modifications: modifications,
		Leaves_Added: leaf_added_type,
		Flowers_Added: flower_added_type,
		Compost_Added: compost_added_type,
		Other_Natural_Modifications: other_natural_modif,
		Scents : fragrance,
		Human_Scents: human_scents,
		Other_Synthetic_Modifications: other_synthetic_mod,
		Color_Change: color_change,
		Pattern_Change: pattern_change
	}); 
}
var Trap_Setup_Form2 = {};

firebaseRefb.on('value', function(snapshot){
	Trap_Setup_Form2 = snapshot.val();
});




 function writeStartUserData3(){
 	var surrounding_plants = document.getElementById('plantts').value;
	var surrounding_water = document.getElementById('waters').value;
	var surrounding_shade = document.getElementById('shady').value;
	var surrounding_sun = document.getElementById('sunnyy').value;
	var surrounding_dry = document.getElementById('dryy').value;
	var surrounding_wet = document.getElementById('wett').value;

	var postRef= firebaseRefc.push();// creating form submission id
	postRef.set({
		Nearby_Plants: surrounding_plants,
		Nearby_Water: surrounding_water,
		Shade: surrounding_shade,
		Sun: surrounding_sun,
		Dry: surrounding_dry,
		Wet: surrounding_wet
	});
 }
var Trap_Setup_Form3 = {};

firebaseRefc.on('value', function(snapshot){
	Trap_Setup_Form3 = snapshot.val();
});


function writeFoundEggsUserData(){
	console.log('writing user data');
	var trap_number = document.getElementById('trap_number').value;
	var month_Eggs_Found = document.getElementById('month_found').value;
	var day_Eggs_Found = document.getElementById('day_found').value;
	var year_Eggs_Found = document.getElementById('year_found').value;
	var temp = document.getElementById('temp').value;
	var humidity = document.getElementById('humid').value;
	var rainfall = document.getElementById('rain').value;
	var number_eggs_total = document.getElementById('totall').value;
	var number_egg_rafts = document.getElementById('raftss').value;
	var number_individual_eggs = document.getElementById('eggss').value;
	var egg_species = document.getElementById('speciess').value;

	var postRef= firebaseRefd.push();// creating form submission id
	postRef.set({                   //creating children data for each form submission
		Trap_Number: trap_number,  
		Mounth_Found: month_Eggs_Found, 
		Day_Found: day_Eggs_Found,
		Year_Found: year_Eggs_Found,
		Temperature: temp,  
		Humidity: humidity, 
		Rainfall: rainfall,
		Eggs_Total: number_eggs_total,
		Egg_Rafts: number_egg_rafts,
		Individual_Eggs: number_individual_eggs,
		Egg_Species: egg_species  
		}); 
}

var Egg_Data_Form = {};

firebaseRefd.on('value', function(snapshot){
	Egg_Data_Form = snapshot.val();
});
















