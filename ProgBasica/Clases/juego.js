var imagenes = [];
imagenes ["Pocacho"] = "pollo.png";
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Tocinauro"] = "cerdo.png";

class Pakiman
{
	constructor(n,v,a)
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;
		
		this.imagen.src = imagenes[this.nombre];
	}
	mostrar()
	{
		document.body.appendChild(this.imagen);
		document.write("<br/><strong>" + this.nombre + "</strong><br/>");
		document.write(this.vida + "<br/>");
		document.write(this.ataque + "<br/>");
	}
}


//var cauchin = new Pakiman("Cauchin",100,30);
//var pocacho = new Pakiman("Pocacho",80,50);
//var tocinauro = new Pakiman("Tocinauro",120,40);

var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pocacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

//console.log(coleccion[0].nombre);

for(var miColeccion of coleccion)
{
	//recorrer array con in
	//coleccion[miColeccion].mostrar();
	 
	//recorrer array con of
	miColeccion.mostrar();
}

//cauchin.mostrar();
//pocacho.mostrar();
//tocinauro.mostrar();