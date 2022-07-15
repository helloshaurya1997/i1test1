var i1;
function preload(){
i1=loadImage("i1.jpg");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
getTime();
}
async function getTime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata")
    var response1=await response.json();
    var dateTime=response1.datetime;
    var min=dateTime.slice(11,16);
    var hr=dateTime.slice(11,13);
    console.log(hr);

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