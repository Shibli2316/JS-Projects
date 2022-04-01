let x, y, z;
document.getElementById("roll").onclick = function(){
    x=Math.floor(Math.random() * 6) +1;
    y=Math.floor(Math.random() * 6) +1;
    z=Math.floor(Math.random() * 6) +1;
    console.log(x);
    console.log(y);
    console.log(z);
    document.getElementById("xroll").innerHTML = x;
    document.getElementById("yroll").innerHTML = y;
    document.getElementById("zroll").innerHTML = z;
}