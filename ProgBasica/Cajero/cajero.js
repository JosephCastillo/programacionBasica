class Billete
{
	constructor(v, c)
	{
		this.cantidad = c;
		this.valor = v;
	}
}

function entregarDinero()
{
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);


	for(var bi of caja)
	{
		if(dinero > 0)
		{
			div = Math.floor(dinero / bi.valor);
			if(div > bi.cantidad)
			{
				papeles = bi.cantidad;
			}
			else
			{
				papeles = div;
			}
			entregado.push(new Billete(bi.valor, papeles));
			dinero = dinero - (bi.valor * papeles);
		} 
	}
	if(dinero > 0)
	{
		r.innerHTML = "he sido malo, muy malo y no puedo darte esa cantidad";
	}
	else
	{
		for(var e of entregado)
		{
			if(e.cantidad > 0)
			{
			r.innerHTML = r.innerHTML + e.cantidad+" billetes de $" + e.valor +"<br/>";
			} 
		}
	} 
	console.log(entregado);
} 
var caja = [];
var entregado = [];
caja.push( new Billete ( 50, 203 ));
caja.push( new Billete ( 20, 302 ));
caja.push( new Billete ( 10, 200 ));

var dinero = 0;
var div = 0;
var papeles = 0;


var b = document.getElementById("extraer");
var r = document.getElementById("resultado");
b.addEventListener('click', entregarDinero);


