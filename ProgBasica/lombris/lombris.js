var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
console.log(teclas);

document.addEventListener("keydown", dibujar);
var c = document.getElementById('lombris');
var papel = c.getContext("2d");

var x = 100;
var y = 100;

dibujar_linea("red", x-1, y-1, x+1, y+1, papel);

function dibujar_linea (color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
  console.log(x_inicial +" "+ y_inicial + " " + x_final + " " + y_final);
}


function dibujar (e)
{
	var colorcito = "blue";
	var movimiento = 3;
	switch(e.keyCode)
	{
		case teclas.UP:
			if (y > 1)
			{
				dibujar_linea(colorcito, x, y, x, y - movimiento, papel);
				y = y - movimiento;
			}
			
		break;
		case teclas.DOWN:
			if (y < 297) 
			{
				dibujar_linea(colorcito, x, y, x, y + movimiento, papel);
				y = y + movimiento;
			}
		break;
		case teclas.LEFT:
			if(x > 1)
			{
				dibujar_linea(colorcito, x, y, x - movimiento, y, papel);
				x = x - movimiento;
			}
		break;
		case teclas.RIGHT:
			if (x < 297) 
			{
				dibujar_linea(colorcito, x, y, x + movimiento, y, papel);
				x = x + movimiento;
			}
		break;
		default:
			console.log("otra tecla");
		break;

	}
}


