
//Normal function
function ResiduoExacto(num1,num2)
{
  return (num1%num2) === 0;
}

//Arrow function
const ResiduoExacto2 = (num1, num2) => (num1 % num2) === 0;

for(let i = 1; i<=1000; i++)
{
  console.log(i);
  return true;
}

1.- Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.

function cualEsMayor(num1,num2){
  if(num1 > num2) {
    console.log("Numero 1 es mayor. Numero 2 es menor.");
  }
  else if(num2 > num1){
    console.log("Numero 2 es mayor. Numero 1 es menor.")
  }
  else{
    console.log("Ambos numeros son iguales.")
  }
}


2- Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos 
años han pasado desde ese año o cuántos años faltan para llegar a ese año.

function tiempoEntreAños(añoActual,añoCualquiera){
  if(añoCualquiera < añoActual)
  {
    console.log("Han pasado " + (añoActual - añoCualquiera) + " desde "  + añoCualquiera)
  }
  else
  {
    console.log("Faltan " + (añoCualquiera-añoActual) + " años para llegar al " + añoCualquiera)
  }
}



3 Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos.


function numeros(num1,num2,num3)
{
  if(num1 === num2 || num2 === num3 || num1 === num3)
  {
    
  }
  
  else
}


4- Pedir tres números y obtener el mayor de ellos.
1.Hacer un programa que imprima en pantalla los números del 1000 al 1.
 2.Hacer un programa que muestre los números pares que hay entre 0 y 1000.
3.Hacer un programa que sume los numeros que hay entre 0 y 10.