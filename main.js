function settime(){

const ho = document.getElementById("ho");
const hoValue = ho.value;
 document.getElementById("hour").textContent=hoValue;

 const mi = document.getElementById("mi");
const miValue = mi.value;
 document.getElementById("minute").textContent=miValue;
}
function setdestination(){
    var x = document.getElementById("destination").value;
    document.getElementById("title").textContent=x;
    document.getElementById("text4").textContent=x;
}
function setstation(){
    var c = document.getElementById("sta1").value;
    var v = document.getElementById("sta2").value;
    var b = document.getElementById("sta3").value;
    document.getElementById("text1").textContent=c;
    document.getElementById("text2").textContent=v;
    document.getElementById("text3").textContent=b;
}
function settrain(){
    var q = document.getElementById("train").value;
    document.getElementById("trainname").textContent=q;

}
function show(){
    document.getElementById('controllpanel').style.visibility = 'visible'; 
}