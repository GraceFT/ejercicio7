function evaluar(){
    var aSmile = document.getElementById("a").value;
    var bSmile = document.getElementById("b").value;
    var isASmile = false;
    var isBSmile = false;
    
    var salida = document.getElementById("salida");
    
    if (aSmile == 1)
        isASmile = true;
    
    if (bSmile == 1)
        isBSmile = true;
    
    if(isASmile && isBSmile){
        salida.innerHTML="1";
    }else{
        if(!isASmile && !isBSmile){
            salida.innerHTML="1";
        }
        else{
            salida.innerHTML="0";
        }
    }
}
