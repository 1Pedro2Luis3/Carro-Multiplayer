var gameState = 0;
var playerCount;
var database;
var game, form, player;
var AllPlayers;
var Carro1, Carro2;
var CarMatriz;

function preload(){
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

}