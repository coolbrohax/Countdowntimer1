let u = 10
let y = 10
let z = 25
let customx10 = document.getElementById("customx1");
let customx20 = document.getElementById("customx2");
let customcount = document.getElementById("count1000");
let btnColorChange = document.getElementById("button");
let rainbowButton1 = document.getElementById("rainbow-button");
var countinput = document.getElementById("1000");
function count() {
  alert(u * y)
  document.getElementById("1000").innerHTML= u * y;
}
function countreset() {
  if(countinput.innerHTML = u * y){
    alert("Reseting...")
    document.getElementById("1000").innerHTML= "0";
  }
}
function countreset1() {
  if(countinput.innerHTML="0") {
    alert("error")
  }
}
function changeText(){
  document.getElementById("100").innerHTML ="x = 10 &nbsp; &nbsp z = 25";
}
function multiplyMoreVariables(){
  if(document.getElementById("100").innerHTML = "x = 10 &nbsp; &nbsp z = 25"){
    alert(u * y * z)
    document.getElementById("1000").innerHTML = u * y * z
  }
}
function changeBackgroundColor(){
  document.getElementById("body").style.background = "grey";
}
function changeBackgroundImage(){
  document.getElementById("body").style.background = "url('https://img.freepik.com/free-vector/background-wave-minimalist-modern-style_483537-5220.jpg')";
  document.getElementById("body").style.backgroundRepeat = "no-repeat"
  document.getElementById("body").style.backgroundSize = "1000px 1000px"
}
function resetbackground(){
  document.getElementById("body").style.background = "none";
  document.getElementById("body").classList.remove("rainbow-light");
}
function changeallbuttons (){
  document.getElementById('button1').style.background = "red";
  document.getElementById('button2').style.background = "red";
  document.getElementById('button3').style.background = "red";
  document.getElementById('button4').style.background = "red";
  document.getElementById('button5').style.background = "red";
  document.getElementById('button6').style.background = "red";
  document.getElementById('button7').style.background = "red";
  document.getElementById('button8').style.background = "red";
  document.getElementById('button9').style.background ="red";
}
function resetbuttons(){
  document.getElementById('button1').style.background = "blueviolet";
  document.getElementById("button1").classList.remove("rainbow-light");
  document.getElementById('button2').style.background = "blueviolet";
  document.getElementById("button2").classList.remove("rainbow-light");
  document.getElementById('button3').style.background = "blueviolet";
  document.getElementById("button3").classList.remove("rainbow-light");
  document.getElementById('button4').style.background = "blueviolet";
  document.getElementById("button4").classList.remove("rainbow-light");
  document.getElementById('button5').style.background = "blueviolet";
  document.getElementById("button5").classList.remove("rainbow-light");
  document.getElementById('button6').style.background = "blueviolet";
  document.getElementById("button6").classList.remove("rainbow-light");
  document.getElementById('button7').style.background = "blueviolet";
  document.getElementById("button7").classList.remove("rainbow-light");
  document.getElementById('button8').style.background = "blueviolet";
  document.getElementById("button8").classList.remove("rainbow-light");
  document.getElementById('button9').style.background = "blueviolet";
  document.getElementById("button9").classList.remove("rainbow-light");
  document.getElementById("button10").style.background = "blueviolet";
  document.getElementById("button10").classList.remove("rainbow-light");
  document.getElementById("button11").style.background = "blueviolet";
  document.getElementById("button11").classList.remove("rainbow-light");
  document.getElementById("rainbow-button").classList.remove("rainbow-light");
}
function rainbowButton(){
    document.getElementById("rainbow-button").classList.add("rainbow-light");
    document.getElementById("button1").classList.add("rainbow-light");
    document.getElementById("button2").classList.add("rainbow-light");
    document.getElementById("button3").classList.add("rainbow-light");
    document.getElementById("button4").classList.add("rainbow-light");
    document.getElementById("button5").classList.add("rainbow-light");
    document.getElementById("button6").classList.add("rainbow-light");
    document.getElementById("button7").classList.add("rainbow-light");
    document.getElementById("button8").classList.add("rainbow-light");
    document.getElementById("button9").classList.add("rainbow-light");
    document.getElementById("button10").classList.add("rainbow-light");
    document.getElementById("button11").classList.add("rainbow-light");
}
function calculateCount() {
  const val1 = parseInt(document.getElementById("customx1").value);
  const val2 = parseInt(document.getElementById("customx1").value);
  if (isNaN(val1) || isNaN(val2)) {
    document.getElementById("count1000").value = '';
  } else {
    document.getElementById("count1000").value = val1 + val2;
  }
}
function changeBackgroundRainbow(){
  document.getElementById("body").classList.add("rainbow-light");
}
function openWindow(){
  window.open("https://liveweave.com/bKfDgK");
}
