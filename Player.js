class Player{
    constructor(){
      this.nome = null;
      this.distancia = 0;
      this.indice = null;
      this.classificacao = null;
    }
    
    //Ler a quantidade de jogadores no banco de dados, salvando em um armazenamento local
    GetCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
           playerCount = data.val(); 
        });
      }

    //Atualiza a quantidade de jogadores no banco de dados
    UpdateCount(Count){
        database.ref("/").update({
          playerCount: Count
        });
      }

    GetCarsPosition(){
        var carsPositionRef = database.ref("carsPosition");
        carsPositionRef.on("value",(data) => {
           this.classificacao = data.val(); 
        });
      }
  
    static UpdateCarsPosition(Ranking){
        database.ref("/").update({
            carsPosition: Ranking
        });
      }

    //Atualiza as informações do jogador
    Update(){
        var playerIndex = "players/player"+this.indice;
        database.ref(playerIndex).set({
          nome: this.nome,
          distancia: this.distancia
        });
      } 

    static GetPlayerInfo(){
        var PlayerInfoRef = database.ref("players");
        PlayerInfoRef.on("value",(data) => {
          AllPlayers = data.val();
        });  
      }
}