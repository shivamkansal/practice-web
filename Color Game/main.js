var numcolors=6;
var colors= generateRandomColors(numcolors);
var squares= document.querySelectorAll(".square");
var pickedColor=pickcolor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
   easybtn.classList.add("selected");
   hardbtn.classList.remove("selected");
  numcolors=3;
   colors=generateRandomColors(numcolors);
  pickedColor=pickcolor();
  colorDisplay.textContent=pickedColor;
  for(var i=0 ; i<squares.length ; i++){
      if(colors[i]){
    squares[i].style.backgroundColor=colors[i];}
    else{
        squares[i].style.display="none";
    }
  }
  //h1.style.backgroundColor= "steelblue";
});

hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numcolors=6; 
    colors=generateRandomColors(numcolors);
  pickedColor=pickcolor();
  colorDisplay.textContent=pickedColor;
  for(var i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].style.display="";
  }

 });
 

resetbutton.addEventListener("click",function(){
  colors=generateRandomColors(numcolors);
  messageDisplay.textContent= "";
  resetbutton.textContent="NEW COLORS"
  pickedColor=pickcolor();
  colorDisplay.textContent=pickedColor;
  for(var i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor= "steelblue";
});

colorDisplay.textContent=pickedColor;
for(var i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function(){

    var clickedColor=this.style.backgroundColor;

    if(clickedColor === pickedColor){
        messageDisplay.textContent="correct!";
    
        resetbutton.textContent="Play Again?";
        changecolors(clickedColor);
        h1.style.backgroundColor=clickedColor;
    }
    else{
        this.style.backgroundColor= "bisque";
        messageDisplay.textContent="try again!";
    
    }
});
}

function changecolors(colors){
    for(var i=0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = colors;
    }
}

function pickcolor(){
    var random=Math.floor(Math.random()*colors.length);
   return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0 ; i < num ; i++){
        arr.push(generatecolors());
    }

    return arr;
}
 
function generatecolors(){
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}