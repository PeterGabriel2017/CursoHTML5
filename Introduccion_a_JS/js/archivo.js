
/*function ejecuta() {
 document.getElementsByTagName("p")[1] .onclick=saludo;
 document.getElementById("importante") .onclick=saludo;
}
*/



function ejecuta() {

//document.querySelector(".importante").onclick=saludo;
var elementos=document.querySelectorAll("#principal p");

for (var i = 0; i < elementos.length; i++) {
	
	
elementos[i].onclick=saludo;
}

}

function saludo() {

alert("¿Que hay de nuevo?");	
}


window.onload=ejecuta;