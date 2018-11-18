var canvas = document.getElementById('miCanvas');
var ctx = canvas.getContext("2d");


canvas.addEventListener("mousedown", mousePresionado)
canvas.addEventListener("mouseup", mouseSoltar)
canvas.addEventListener("mousemove", mouseMovimiento)

var estado;


function mousePresionado()
{
	estado = 1;
}

function mouseSoltar()
{
 	estado = 2;
}

function mouseMovimiento(e)
{
	var x = e.layerX; 
	var y = e.layerY;
	if(estado == 1)
	{

		dibujar("red", x+1, y+3, x-3, y-1, ctx);
		console.log(x + " " +y);
	}

}

function dibujar(color, xi, yi, xf, yf, lienzo)
{
	var l = lienzo
	l.beginPath();
	l.strokeStyle =  color;
	l.lineWidth = 3
	l.moveTo(xi, yi);
	l.lineTo(xf, yf);
	l.stroke();
	l.closePath();
}