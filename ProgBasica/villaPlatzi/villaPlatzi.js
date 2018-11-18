document.addEventListener("keydown", mueveteLobo);
var vp = document.getElementById('villaPlatzi');
var ctx = vp.getContext("2d");

var posicionLoboX = calcularNumeroAleatorio(0,500);
var	posicionLoboY = calcularNumeroAleatorio(0,500);
var movimietoLobo = calcularNumeroAleatorio(0,50);


var tecla = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

var fondo = {
  url: "tile.webp",
  cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


var vaca = {
	url: "vaca.webp",
	cargaOK: false
}

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

var pollo = {
	url: "pollo.webp",
	cargaOK: false
}

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

var cerdo = {
	url: "cerdo.webp",
	cargaOK: false
}

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

var lobo = {
	url: "lobo.png",
	cargaOK: false
};

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

var cantidad = calcularNumeroAleatorio(0,50)

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}
function cargarPollos()
{
	pollo.cargaOK = true;
	dibujar();
}
function cargarCerdos()
{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarLobo ()
{
	lobo.cargaOK = true;
	dibujar();
}

function dibujar()
{
	if(fondo.cargaOK)
	{
   		ctx.drawImage(fondo.imagen, 0, 0);
	}
	if (vaca.cargaOK) 
	{

		for(i = 0; i < cantidad; i++)
		{
			x = calcularNumeroAleatorio(0, 7);
			y = calcularNumeroAleatorio(0, 7);
			x = x * 60;
			y = y * 60;
	    	ctx.drawImage(vaca.imagen, x, y);
    	}
	}
	if (pollo.cargaOK) 
	{
		for(i = 0; i < cantidad; i++)
		{
			x = calcularNumeroAleatorio(0, 7);
			y = calcularNumeroAleatorio(0, 7);
			x = x * 60;
			y = y * 60;
	    	ctx.drawImage(pollo.imagen, x, y);
	    }
	}
	if (cerdo.cargaOK) 
	{
		for(i = 0; i < cantidad; i++)
		{
			x = calcularNumeroAleatorio(0, 7);
			y = calcularNumeroAleatorio(0, 7);
			x = x * 60;
			y = y * 60;
	    	ctx.drawImage(cerdo.imagen, x, y);
	    }
	}
	if (lobo.cargaOK)
	{
		ctx.drawImage(lobo.imagen, posicionLoboX, posicionLoboY);
	}
}

function mueveteLobo(e)
{
	switch(e.keyCode)
	{
		case tecla.LEFT:
			if (posicionLoboX > 0)
			{		
				ctx.drawImage(lobo.imagen, posicionLoboX - movimietoLobo, posicionLoboY);
				posicionLoboX = posicionLoboX - movimietoLobo;
				console.log(posicionLoboX)
			}
		break;
		case tecla.UP:
			if (posicionLoboY > -20)
			{		
				ctx.drawImage(lobo.imagen, posicionLoboX, posicionLoboY - movimietoLobo);
				posicionLoboY = posicionLoboY - movimietoLobo;
				console.log(posicionLoboY)
			}
		break;
		case tecla.RIGHT:
			if (posicionLoboX < 435)
			{		
				ctx.drawImage(lobo.imagen, posicionLoboX + movimietoLobo, posicionLoboY);
				posicionLoboX = posicionLoboX + movimietoLobo;
				console.log(posicionLoboX)
			}
		break;
		case tecla.DOWN:
			if (posicionLoboY < 420)
			{		
				ctx.drawImage(lobo.imagen, posicionLoboX, posicionLoboY + movimietoLobo);
				posicionLoboY = posicionLoboY + movimietoLobo;
				console.log(posicionLoboY)
			}
		break;
		default:
			console.log("presonaste otra tecla");
		break;
	}


	
}


function calcularNumeroAleatorio (min, max)
{
	var resultado;
	resultado = Math.floor(Math.random()* (max - min +1)) + min;
	return resultado;
}