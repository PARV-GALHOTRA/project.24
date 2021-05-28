const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber_bodies;
var stone, box;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber_1 = new Rubber(150,250,10);
    rubber_2 = new Rubber(150,255,10);
    rubber_3 = new Rubber(150,260,10);
    rubber_4 = new Rubber(150,265,10);
    rubber_5 = new Rubber(150,270,10);
    rubber_6 = new Rubber(150,275,10);
    rubber_7 = new Rubber(150,280,10);
    rubber_8 = new Rubber(150,285,10);
    rubber_9 = new Rubber(150,290,10);
    rubber_10 = new Rubber(150,295,10);
    rubber_11 = new Rubber(150,300,10);
    rubber_12 = new Rubber(150,305,10);
    rubber_13 = new Rubber(150,310,10);
    rubber_14 = new Rubber(150,315,10);
    rubber_15 = new Rubber(150,320,10);
    rubber_16 = new Rubber(150,325,10);
    rubber_17 = new Rubber(150,330,10);
    rubber_18 = new Rubber(150,335,10);
    rubber_19 = new Rubber(150,340,10);
    rubber_20 = new Rubber(150,345,10);
    rubber_21 = new Rubber(150,350,10);
    rubber_22 = new Rubber(150,355,10);
    rubber_23 = new Rubber(150,360,10);
    rubber_24 = new Rubber(150,365,10);
    rubber_25 = new Rubber(150,370,10);
    rubber_26 = new Rubber(150,375,10);
    rubber_27 = new Rubber(150,380,10);
    rubber_28 = new Rubber(150,385,10);
    rubber_29 = new Rubber(150,390,10);
    rubber_30 = new Rubber(150,395,10);
    iron = new Iron(600,300)
    stone = new Stone(400,300,20,50)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber_1.display();
    rubber_2.display();
    rubber_3.display();
    rubber_4.display();
    rubber_5.display();
    rubber_6.display();
    rubber_7.display();
    rubber_8.display();
    rubber_9.display();
    rubber_10.display();
    rubber_11.display();
    rubber_12.display();
    rubber_13.display();
    rubber_14.display();
    rubber_15.display();
    rubber_16.display();
    rubber_17.display();
    rubber_18.display();
    rubber_19.display();
    rubber_20.display();
    rubber_21.display();
    rubber_22.display();
    rubber_23.display();
    rubber_24.display();
    rubber_25.display();
    rubber_26.display();
    rubber_27.display();
    rubber_28.display();
    rubber_29.display();
    rubber_30.display();
    iron.display();
    stone.display();
}