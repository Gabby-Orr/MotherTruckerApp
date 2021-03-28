<!DOCTYPE html>
<html>
<head>

    <meta charset = "utf-8"/>
    <title>Store near you</title>
    <link rel="stylesheet" type="text/css" href="css/overallStyleSheet.css">
	 <!--jQuery library-->
	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

	 <!--Google Maps Javascript library-->
	 <script src = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=KEY"></script> 

	<link rel = "stylesheet" type = "text/css" href = "style2.css">
   	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin="">
	//var mymap =null;   	
	</script>

    <script>
	var searchInput = 'address';

	$(document).ready(function () {
		var autocomplete;
		autocomplete = new google.maps.places.Autocomplete((document.getElementById("address")), {
			types: ['geocode'],
		});

	});


</script>

 <style>

 ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}

	/* background */
    body {
        background-color: rgb(43, 40, 192);
	}
	

	/* top banner */
    .topBanner{
			background:url("yplogo.png");
			height:120px;
			vertical-align: top;
		}
		
		
		.inBanner{
			color:white;
			float:left;
			padding:50px 0px 0px 300px;
			font-size:2em;
		}

        .right_header {
          color: #fff;
          float: right;
}
</style>
</head>
<body>

    <ul>
        <li><a class="active" href="#home">Map</a></li>
        <li><a href="#categories">Review</a></li>
        <li><a href="#ressources">Reserve</a></li>
        <li><a href="#about">About Us</a></li>
        <li class = "right_header"><a href="#about">Sign Up</a></li>
      </ul>


<input type = "text" id = "address" name = address placeholder="Enter your address here" style="width: 400px;" class="input"></input> 
</br>

<table>
    <br>
    <tr>
       <td>Lattitude</td>
       <td>Longitude </td>
       <td>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</td>
    </tr>

    <tr>
       <td><input type = "text" id = "lat" name = "lat"></input></td>
       <td><input type = "text" id = "long" name = "long"></input></td>
    </tr>

     <label for="quantity">Radius in kilometers:  </label>
     <input type="number" id="quantity" name="quantity" min="0" max="200" step="0" value="5" style="width: 260px;">&nbsp</input>
     <br><br>
     <div class="cart">
         <button type = "button" onclick = "addr_search()">Submit</button>
     </div>

     <span id = "result"></span>
  <span id = "result2"></span><br>
  <span id = "messageradius"></span>
  </table>  
</fieldset>

<br>
</td>
<td style="width: 100%">

<div id="mapid" style="width: 100%; height: 400px" ></div>
</td>

</tr>

</table>


<script type="text/javascript">
		
    //Initialize Map	
    var ConcordiaLat = 40.762880;
       var ConcordiaLong = -73.978720;

    var secondLocationLat = 41.428970
    var secondLocationLong = -75.644670;
    
    //mapid is the id for your div element
    //You can leave the rest as it is
    mymap = L.map('mapid').setView([ConcordiaLat, ConcordiaLong], 14.5);			
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 50,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
    }).addTo(mymap);

    //var BigCircleConcordia = L.circle([ConcordiaLat, ConcordiaLong], {
    //color: "red",
    //fillOpacity: 0.5,
    //radius: 800

    //}).addTo(mymap);

    var SmallSecondLocation = L.circle([secondLocationLat, secondLocationLong], {
    color: "red",
    fillOpacity: 0.5,
    radius: 5

    }).addTo(mymap);

    var SmallCircleConcordia = L.circle([ConcordiaLat, ConcordiaLong], {
    color: "red",
    fillOpacity: 0.5,
    radius: 5

    }).addTo(mymap);


    var SmallSecondLocation = L.circleMarker([secondLocationLat, secondLocationLong], {
    color: "red",
    fillOpacity: 0.5,
    radius: 12

    }).addTo(mymap);

    var SmallCircleConcordia = L.circleMarker([ConcordiaLat, ConcordiaLong], {
    color: "red",
    fillOpacity: 0.5,
    radius: 12

    }).addTo(mymap);

  var concordia = SmallCircleConcordia.getLatLng();
  var location2 = SmallSecondLocation.getLatLng();

   //CODE TO CHANGE ADDRESS TO LATLONG
   //https://www.w3schools.com/js/js_ajax_http_response.asp
   //https://wiki.openstreetmap.org/wiki/FR:Nominatim
   //There is also the reverse search from lat long to address
      function addr_search()
     {
    //"1100 Boulevard Robert-Bourassa #104, Montreal, Quebec H3B 3A5"
    var addr = document.getElementById("address").value;
    var concordiaAddr = [ConcordiaLat,ConcordiaLong] ;
    var location2Addr = [secondLocationLat,secondLocationLong];
       var xmlhttp = new XMLHttpRequest();
    var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + addr;
    let polyline = null;
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
                if (polyline != null)
                    mymap.removeLayer(polyline);
                if (markerGoTo != null)
                       mymap.removeLayer(markerGoTo);

            var myArr = JSON.parse(this.responseText);			   		    
            //myArr is an array of the matching addresses 
            //You can extract the lat long attributes
            //myArr[0].lat and myArr[0].lon;
            
            var UserLat = myArr[0].lat;
            var UserLong = myArr[0].lon;
            var userCoordinates = [UserLat, UserLong];
            document.getElementById('lat').value = UserLat;
            document.getElementById('long').value = UserLong;


            //Create markers from the info
            //var latlng = L.latLng(ConcordiaLat, ConcordiaLong);
            //L.circleMarker(latlong, { color: "xx", radius: xx });
            var chosenRadius = document.getElementById("quantity").value;
            var markerGoTo = L.circle(userCoordinates, {
                color: "green",
                radius: chosenRadius *500,
                fillOpacity: 0.5,
            }).addTo(mymap);

            var markerGoTo = L.circle(userCoordinates, {
                color: "green",
                radius: 12,
                fillOpacity: 0.5,
            }).addTo(mymap);

            var user = markerGoTo.getLatLng();

            var distance1 = (concordia.distanceTo(user)).toFixed(0)/1000;
            //document.getElementById("result").innerHTML = "Your distance from Dunder Mifflin Corporate Headquarters is " + distance1 + "km.";
            var distance2 = (location2.distanceTo(user)).toFixed(0)/1000;
            //document.getElementById("result2").innerHTML = "Your distance from Dunder Mifflin Paper Company, Inc is " + distance2 + "km.";

            var closest;

            if (distance1 > distance2){
                closest = distance2;
                var closestAddr = location2Addr ;
            } else {
                closest = distance1;
                var closestAddr = concordiaAddr ;
            } 

            document.getElementById("result2").innerHTML = "Your distance from Dunder Mifflin Inc is " + closest + "km.";

            
             if (closest <= chosenRadius){
                 document.getElementById("messageradius").innerHTML = "This location is within your given radius";
             }else{
                 document.getElementById("messageradius").innerHTML = "This location is outside of your given radius";}
            //Use Polyline to draw line on map
            //https://leafletjs.com/reference-1.7.1.html
            
            polyline = L.polyline([closestAddr, userCoordinates], {
                color: "#"+Math.floor(Math.random()*16777215).toString(16),
            });

            polyline.addTo(mymap);

            mymap.fitBounds(polyline.getBounds());

            
         }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }


</script>	



</body>
</html>
