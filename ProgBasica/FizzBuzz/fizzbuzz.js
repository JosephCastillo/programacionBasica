for (var i = 1; i <= 100; i++)
{
  var cadena = "";
  if(i % 3 == 0)
  {
    cadena += "Fizz";
  }
  if(i % 5 == 0)
  {
    cadena += "Buzz";
  }
  document.write(cadena || i);
  document.write("<br/>")
}
