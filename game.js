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
      Carro1.addImage("CarroBranco", Carro1_img);
 
      Carro2 = createSprite(350,400);
      Carro2.addImage("CarroVermelho", Carro2_img);
 
      CarMatriz = [Carro1,Carro2];
    }
 
    Play(){
      form.Hide();
      text("O jogo começou",100,100);
      Player.GetPlayerInfo();
      player.GetCarsPosition();
      if(AllPlayers !== undefined){
          var Index = 0;
          var x = 200;
          var y;
          background("#c68767");
          image(Pista_Longa,0,-displayHeight*4,displayWidth,displayHeight*5);
        for(var plr in AllPlayers){
          Index+=1;
          x = x+200;
          y = displayHeight-AllPlayers[plr].distancia;
          CarMatriz[Index-1].x = x;
          CarMatriz[Index-1].y = y;
        if(Index === player.indice){
          camera.position.x = displayWidth/2;
          camera.position.y = CarMatriz[Index-1].y;
          stroke('rgb(255, 50, 0)');
          fill('rgb(255, 50, 40)');
          ellipse(x,y,60,120);
          }
        }
      }
      
      if(keyDown("up_arrow") && player.indice !== null){
        player.distancia += 15;
        player.Update();
      }
 
      if(player.distancia >= 3650){
         gameState = 2;
         player.classificacao += 1;
         Player.UpdateCarsPosition(player.classificacao);
      }
 
      drawSprites();
    }
 
    End(){
      console.log("Fim do Jogo");
      console.log(player.classificacao);
      swal({
        title:,
        text:,
        imageUrl: 
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Obrigado por jogar"
      });
    }
}