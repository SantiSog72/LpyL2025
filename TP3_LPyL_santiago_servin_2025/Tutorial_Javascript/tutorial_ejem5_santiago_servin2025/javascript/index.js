function calculos ()
{
	let a, b, c =0, d= 0.0, e= "0", f = false, g, comparacion, resul;
	let h = new Array();
	
	//generacion de valores aleatorios para a y b	
	a = Math.round(Math.random() * (20 - 1) + 1);
	b = Math.round (Math.random() * (10 -1) +1);
	
	document.write("<section>");
	document.write("<article>");
	
	document.write ("a = " + a + "<br>");
	document.write ("b = " + b + "<br>");
	
	//operaciones sobre a y b
	resul = a+b;
	document.write ("a + b = "+ resul + "<br>");
	resul= a-b;
	document.write ("a - b = " + resul + "<br>");
	resul = a*b;
	document.write ("a * b = " resul + "<br>");
	resul = a/b;
	document.write ("a / b = " +resul + "<br>");
	resul = a%b;
	document.write("resto de (a/b) =" + result + "<br>");
	
	document.write ("</article>");
	document.write ("</section>");
}