class Game{
    constructor(){
      
    } 
      
    //Ler o estado do jogo no banco de dados, salvando em um armazenamento local
    GetState(){
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value",function(data){
         gameState = data.val(); 
      });
    }
    
    //Atualiza o estado do Jogo no banco de dados
    Update(state){
      database.ref("/").update({
          gameState: state
      });
    }
    
    async Iniciar(){
      if(gameState == 0){
         player = new Player();
         
         var playerCountRef = await database.ref("playerCount").once("value");
         if(playerCountRef.exists()){
            playerCount = playerCountRef.val(); 
            player.GetCount();
         }

         form = new Formulário();
         
         form.display();
      }

      Carro1 = createSprite(150,400);
      Carro2 = createSprite(350,400);
      CarMatriz = [Carro1,Carro2];
    }

    Play(){
      form.Hide();
      text("O jogo começou",100,100);
      Player.GetPlayerInfo();
      if(AllPlayers !== undefined){
        var Y = 150;
        var Index = 0;
        var x;
        var y;
        for(var plr in AllPlayers){
          Index+=1;
          x = x+200;
          y = displayHeight-AllPlayers[plr].distancia;
          Y+=50;
        if(Index === player.indice){
          CarMatriz[Index-1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = CarMatriz[Index-1].y;
          }
        }
      }
   
      if(keyDown("up_arrow") && player.indice !== null){
        player.distancia += 15;
        player.Update();
      }
      drawSprites();
    }
}