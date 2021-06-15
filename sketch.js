const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var sunrise1,sunrise2,sunrise3,sunrise4,sunrise5,sunrise6;
var sunset7,sunset8,sunset9,sunset10,sunset11,sunset12;

function preload() {
    // create getBackgroundImg( ) here
    sunrise1 = loadImage("sunrise1.png")
    sunrise2 = loadImage("sunrise2.png")
    sunrise3 = loadImage("sunrise3.png")
    sunrise4 = loadImage("sunrise4.png")
    sunrise5 = loadImage("sunrise5.png")
    sunrise6 = loadImage("sunrise6.png")
    sunset7 = loadImage("sunset7.png")
    sunset8 = loadImage("sunset8.png")
    sunset9 = loadImage("sunset9.png")
    sunset10 = loadImage("sunset10.png")
    sunset11 = loadImage("sunset11.png")
    sunset12 = loadImage("sunset12.png")
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


}

function draw(){

    background(sunrise6);
    // add condition to check if any background image is there to add
    
    
    // write code to display time in correct format here
   

    Engine.update(engine);


}

async function getBackgroundImg(){

    // write code to fetch time from API
    //async function getTime(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        
    //change the data in JSON format
    var json= await response.json();

   // console.log(dt)
    var dt=json.datetime;

    // write code slice the datetime
    var hour = dt.slice(11,13)
    console.log(hour)
   
    // add conditions to change the background images from sunrise to sunset
    if(hour>05&&hour<13){
        bg = "sunrise6.png"
    }
    else{
        bg = "sunset12.png"
    }
    
 //load the image in backgroundImg variable here
 backgroundImg = loadImage(bg)
}

