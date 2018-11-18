var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var lineas = 30;
var  yi, xf, yf, xi;

for (var l = 0; l < lineas; l++)
{

  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujar_linea("red", 0, yi, xf, 300);

  yf = 10 * l;
  xi = 10 * (l + 1);
  dibujar_linea("blue", xi, 0, 300, yf);

  xf = 10 * (l + 1);
  xi = 300 - xf;
  dibujar_linea("black", xi, 0, 0, xf);

  xi = 10 * (l + 1);
  yf = 300 - xi;
  dibujar_linea("green", xi, 300, 300, yf);

  console.log(xi);
}

dibujar_linea("red", 1, 0 ,1, 300);
dibujar_linea("red", 1, 299, 300, 299);
dibujar_linea("red", 1, 1, 300, 1);
dibujar_linea("red", 299, 0, 299, 300);

function dibujar_linea (color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
