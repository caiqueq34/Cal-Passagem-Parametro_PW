function calcular(op)
{
var n1 = document.getElementById("txtn1").value;
var n2 = document.getElementById("txtn2").value;
var resul=0;

if((isNaN(n1)) || (n1==""))
  {
    window.alert("1° valor invalido");
    document.getElementById("txtn1").value="";
    document.getElementById("result").value="";
    document.getElementById("parimpar").value="";
    document.getElementById("txtn1").focus();
   }

else if ((isNaN(n2)) || (n2==""))
   {
    window.alert("2° valor invalido");
    document.getElementById("txtn2").value="";
    document.getElementById("result").value="";
    document.getElementById("parimpar").value="";
    document.getElementById("txtn2").focus();
   }
else
   {
     n1=parseFloat(n1);
     n2=parseFloat(n2);
     if (op=="+")
        resul=n1+n2;
     else if(op=="-")
        resul=n1-n2;
      else if(op=="*")
        resul=n1*n2;
      else if(n2!=0)
          resul=n1/n2;
      else
      {
        document.getElementById("result").value="Erro de divisão";
        document.getElementById("parimpar").value="Erro";
        return;
      }

      document.getElementById("result").value=resul.toFixed(1);
     
      if ((resul%2)==0)
        document.getElementById("parimpar").value="Numero par";
     else 
        document.getElementById("parimpar").value="Numero impar";
         
    }
}   
