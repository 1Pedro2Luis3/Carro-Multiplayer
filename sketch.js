var Pista, Pista_Longa;
var Carro1, Carro1_img;
var Carro2, Carro2_img;
var Carro3, Carro3_img;
var Carro4, Carro4_img;
var CarMatriz;

var gameState = 0;
var distancia = 0;
var playerCount;
var database;
var game, form, player;
var AllPlayers;


function preload(){
    Carro1_img = loadImage("car1.png");
    Carro2_img = loadImage("car2.png");
    Carro3_img = loadImage("car3.png");
    Carro4_img = loadImage("car4.png");
    Pista_Longa = loadImage("track.jpg");
}
    
function setup(){
    createCanvas(displayWidth-100,displayHeight-150);
    database = firebase.database();

    game = new Game();

    game.GetState();
    game.Iniciar();
}

function draw(){
    background("white");
    
    if(playerCount === 2)
       game.Update(1);
    
    if(gameState === 1)
       game.Play();

    if(gameState === 2)
       game.End();
}