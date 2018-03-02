var input = "" ;
function number(x){
input += x ; 
document.getElementById("textty").value += x ;
}


function addition(){
    input += "+" ;
    document.getElementById("textty").value += "+" ;     
}
function minus(){
    input += "-" ;
    document.getElementById("textty").value += "-" ;     
}
function division(){
    input += "/" ;
    document.getElementById("textty").value += "/" ;     
}
function multiply(){
    input += "*" ;
    document.getElementById("textty").value += "*" ;     
}
function equals(){
    document.getElementById("textty").value = eval(input) ; 
}
function sine(){
    input += "Math.sin" ;
    document.getElementById("textty").value += "sin" ; 
}
function clear(){
    input += "" ;
    input.innerHTML = '';
    
}
function bra(){
    input += "(" ;
    document.getElementById("textty").value += "(" ; 

}
function bra1(){
    input += ")" ;
    document.getElementById("textty").value += ")" ; 

}

function tane(){
    input += "Math.tan" ;
    document.getElementById("textty").value += "Tan" ; 
}
function cos(){
    input += "Math.cos" ;
    document.getElementById("textty").value += "cos" ; 
}
function sqrt(){
    input += "Math.sqrt" ;
    document.getElementById("textty").value += "sqrt" ; 
}

function sqrt(){
    input += "" ;
    document.getElementById("textty").value += "sqrt" ; 
}

function log(){
    input += "Math.log" ;
    document.getElementById("textty").value += "log" ; 
}