var i1,response,response1,min,hr;
function preload(){
i1=loadImage("i1.jpg");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
getTime();
if(hr >= 00 && hr <=11){
    console.log("morrrning");
}
else if(hr >= 12 && hr <=16){
    console.log("afternoon");
}
if(hr >= 17 && hr <=23){
    console.log("evening");
    background(i1);
    text("Good Evening",windowWidth/2-100,windowHeight/2-100);
    textSize(20);
    fill("yellow");
}
}
async function getTime(){
    response=await fetch("https://worldtimeapi.org/api/timezone/asia/kolkata")
    response1=await response.json();
    dateTime=response1.datetime;
    min=dateTime.slice(11,16);
    hr=dateTime.slice(11,13);
    console.log(hr);

   
}