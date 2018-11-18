var cantidad_lineas = document.getElementById('num_lineas');
var boton = document.getElementById('btn_cant_lineas');

boton.addEventListener("click", dibujoPorClick);
cantidad_lineas.addEventListener("blur", limpiarLienzo);

var d = document.getElementById('dibujo');
var ancho = d.width;
var lienzo = d.getContext("2d");


function limpiarLienzo()
{
	lienzo.clearRect(0,0,ancho,300);

}



function dibujar_linea(color, xi, yi, xf, yf)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo( xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick(){

	var lineas = parseInt(cantidad_lineas.value);
	var espacio = ancho / lineas;

	for(i = 0; i < lineas; i++)
	{
		xi = espacio * i;
		xf = espacio * i;
		yi = espacio * i;
		yf = espacio * i;



		dibujar_linea("green", 0, yi, 300, yf);
		dibujar_linea("green", xi, 300, xf, 0);
	}

	dibujar_linea("grey", 1, 0, 1, 300);
	dibujar_linea("grey", 0, 299, 300, 299);
}


/*function dibujoPorClick ()
{

	var lineas = parseInt(cantidad_lineas.value);
	var espacio = ancho / lineas;
	var colorcito = "red";

for (l=0; l < lineas; l++)
{
	yi = espacio * l;
	xf = espacio * (l + 1);
	//console.log(yi + " " + xf);
	dibujar_linea(colorcito, 0, yi, xf, 300);
	//dibujar el borde del lienzo
	dibujar_linea(colorcito, 1, 0, 1, 300);
	dibujar_linea(colorcito, 0, 300, 300, 300);
}

}*/