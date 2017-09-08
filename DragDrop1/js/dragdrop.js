
var elem_origen;

var elem_destino;



function comenzar(){
 
 elem_origen=document.getElementById("imagen");
 
//elem_origen.addEventListener("dragstart",function(){alert("Comenzo el evento");},false);

elem_origen.addEventListener("dragstart", comenzar_arrastrar,false);

elem_destino=document.getElementById("zonadestino");

//elem_destino.addEventListener("dragenter", function(e){ e.preventDefault();},false);

elem_destino.addEventListener("dragover", function(e){ e.preventDefault();},false);

elem_destino.addEventListener("drop", soltado,false);

elem_origen.addEventListener("dragend", terminado,false);

elem_destino.addEventListener("dragenter", entrando,false);

elem_destino.addEventListener("dragleave", saliendo,false);

}

function comenzar_arrastrar(e) {
	var codigo="<img src='" + elem_origen.getAttribute("src") + "'>";
	e.dataTransfer.setData("Text", codigo);
   

}

function soltado(e) {
   
   e.preventDefault();
   elem_destino.innerHTML=e.dataTransfer.getData("Text");

}

function terminado(e){
	
	var elemento=e.target;
    elemento.style.visibility="hidden";

}

function entrando(e) {
   
   e.preventDefault();
   elem_destino.style.background="rgba(8,252,25,.8)";

}

function saliendo(e) {
   
   e.preventDefault();
  // elem_destino.style.background="#FFFFFF";
   elem_destino.style.visibility="hidden";
}


window.addEventListener("load",comenzar,false);

/*1.0 dragenter()

Ocurre cuando empezamos a mover un elemento de tipo arrastrable dentro de su contenedor, pero todavía no ha sido soltado; en otras palabras, este evento se dispara cuando el elemento "arrastrable" entra dentro de la "zona para soltar" -drop zone-.

Este evento es ideal para cambiar las reglas de estilo del contenedor al estar "dentro" del elemento arrastrable.
En este evento podemos inspeccionar la data transferida (dataTransfer) mediante el evento, esta data fue la inicializada mediante el método setData; además, podemos inspeccionar el tipo de dato devuelto.

2.0 dragleave()

Ocurre cuando un elemento arrastrable ha sido soltado/movido fuera del contenedor.

este evento es perfecto para eliminar cualquier estilo aplicado a nuestro contenedor.
3.0 dragover()

Ocurre de manera continuamente cuando un elemento arrastrable se mueve dentro de su contenedor y solo se deja de ejecutar hasta que soltemos el elemento arrastrable dentro del contenedor o salgamos del mismo; este evento es perfecto para saber cual es la posición del elemento arrastrable dentro del contenedor.

 

Al igual que ocurre con el evento drag, es perfecto para determinar la posición exacta del elemento arrastrable debido a que se invoca repetidamente mientras que el elemento "arrastrable" esté dentro del contenedor; el número de veces que se invoque este evento depende del navegador.

4.0 drop()

Ocurre cuando un elemento arrastrable es soltado dentro de un contenedor; en este evento debemos recolectar la información del elemento arrastrable mediante el método getData.

Los atributos que colocamos en los elementos son: ondragenter, ondragleave, ondragover y ondrop respectivamente.
Atributos del Drag and Drop en HTML5

Con sólo manejar los eventos no es suficiente para empezar a trabajar con el Drag and Drop en HTML5. Se debe añadir el atributo draggable="true" a los elementos del DOM que deseamos que sean arrastrables.

*/ 
