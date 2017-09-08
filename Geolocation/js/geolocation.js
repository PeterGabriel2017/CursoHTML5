

function comenzar() {
	// 
	var miboton=document.getElementById("dame_ubicacion");
	miboton.addEventListener("click", obtener,false);
}

function obtener(){

    var parametros={enableHighAccuracy: true, timeout:10000, maximumAge:60000};

	navigator.geolocation.getCurrentPosition(mostrar_posicion, gestion_errores,parametros);
}

function mostrar_posicion(posicion){

	var ubicacion=document.getElementById("ubicacion");
	
	/*var miubicacion="";
	
	miubicacion+="Latitud: " + posicion.coords.latitude + "<br>";
   
    miubicacion+="Longitud: " + posicion.coords.longitude + "<br>";

    miubicacion+="Exactitud: " + posicion.coords.accuracy + "<br>"; */
  
     var mimapa = "http://maps.googleapis.com/maps/api/staticmap?center" + posicion.coords.latitude + "," + posicion.coords.longitude + "," + "&zoom=16&size=600x600&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude;

    //ubicacion.innerHTML=miubicacion;
    ubicacion.innerHTML="<div><img src= '"+ mimapa +"'></div>";
}

function gestion_errores(error){

	//alert("Ha habido un error" + error.code + " " + error.message);
	if(error.code==1){
		alert("Debes permitir el uso de la geolocalización en tu navegador");
	}
}

window.addEventListener("load", comenzar,false);