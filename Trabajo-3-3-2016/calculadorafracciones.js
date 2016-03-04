var f1 = prompt("Ingrese fraccionario").split("/");
var f2 = prompt("Ingrese el otro fraccionario").split("/");
var num = ((f1[0]*f2[1])+(f1[1]*f2[0]));
var den = (f1[1]*f2[1]);
var res=num+"/"+den;
confirm("El resultado de la suma es: "+simplifica(res));

num = ((f1[0]*f2[1])-(f1[1]*f2[0]));
den = (f1[1]*f2[1]);
res=num+"/"+den;
confirm("El resultado de la resta es: "+simplifica(res));

num = (f1[0]*f2[0]);
den = (f1[1]*f2[1]);
res=num+"/"+den;
confirm("El resultado de la multiplicacion es: "+simplifica(res));

num = (f1[0]*f2[1]);
den = (f1[1]*f2[0]);
res=num+"/"+den;
confirm("El resultado de la divicion es: "+simplifica(res));

function simplifica(val)
{
   var parteVal = val.split("/");
   var numerador = Number(parteVal[0]);
   var denominador = Number(parteVal[1]);
   var maximo = numerador <= denominador ? numerador : denominador;
   var cont = 2;
   do
   {
       if(numerador % cont === 0 && denominador % cont === 0)
       {
           numerador /= cont; // numerador = numerador / cont;
           denominador /= cont;
           maximo = numerador <= denominador ? numerador : denominador;
       }
       else
       {
           cont++;
           if(cont > maximo)
           {
               break;
           }
       }
   }while(1);
   var respuesta = numerador + "/" + denominador;
   var compara = denominador === 0 ? respuesta = "error" :
                 numerador === 0 ? respuesta = 0 :
                 denominador === 1 ? respuesta = numerador : estado = "ok";
   return respuesta;
};
