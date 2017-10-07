<!DOCTYPE html>
<html>
<head>
<title>EvacuationPlan</title>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
<meta charset="utf-8">
<style>
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}

#map {
	height: 100%;
}
</style>
<script>
var map;
var infowindow;
var url = "https://dfims-tstar.rhcloud.com"+"/incidentDetail?incidentId=";
var contentjson = "";
var marker;
var data ;
function initMap() {
  var pyrmont = {lat: 22.5718, lng: 88.4324};
  var incidentId = getParameterByName('id');
  url = url+incidentId;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
  data = JSON.parse(xhttp.responseText);
  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 14
  });
  infowindow = new google.maps.InfoWindow();
  //console.log(data.blockages);
  if(data &&  data.evacuationData && data.evacuationData.emergencyExitPoints) {
 for (var i = 0; i < data.evacuationData.emergencyExitPoints.length; i++) {
		  //alert(o.evacuationData.emergencyExitPoints[i].latitude+" - "+o.evacuationData.emergencyExitPoints[i].longitude);
		  marker = new google.maps.Marker({
   position: new google.maps.LatLng(data.evacuationData.emergencyExitPoints[i].latitude, data.evacuationData.emergencyExitPoints[i].longitude)
		        //position: new google.maps.LatLng('22.5765', '88.4331')
		        ,icon:'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
		        ,map: map
		      });
	  }
  }
  if(data &&  data.blockages && data.blockages.blockageLocations) {
 for (var i = 0; i < data.blockages.blockageLocations.length; i++) {
		  //alert(o.blockages.blockageLocations[i].latitude+" - "+o.blockages.blockageLocations[i].longitude);
		  marker = new google.maps.Marker({
   position: new google.maps.LatLng(data.blockages.blockageLocations[i].latitude, data.blockages.blockageLocations[i].longitude)
		        //position: new google.maps.LatLng(22.5765, 88.4331)
			    ,icon:'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
		        ,map: map
		      });
	  }
  }
  /*
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    types: ['store']
  }, callback);*/
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
    </script>
</head>
<body>
	<div id="map"></div>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzoPVVzUOIghktlFA4BXukDB_5QrtIv7c&libraries=places&callback=initMap"
		async defer></script>
</body>
</html>