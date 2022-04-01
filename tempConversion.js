document.getElementById("submitbtn").onclick = function(){
    let temp;
    if(document.getElementById("cbtn").checked){
        temp=document.getElementById("textBox").value;
        temp= Number(temp);
        temp=toCelcius(temp);
        document.getElementById("tempLabel").innerHTML = temp + " degree Celcius";
    }
    else if(document.getElementById("fbtn").checked){
        temp=document.getElementById("textBox").value;
        temp= Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + " degree Farenheit";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}



function toCelcius(temp){
    return (temp-32)*(5/9);
}
function toFahrenheit(temp){
    return temp * 9/5 +32;
}