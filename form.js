class Formulário{
    constructor(){
        this.Input = createInput("Nickname:");
        this.Button = createButton("Iniciar");
        this.Tela_De_Carregamento = createElement('h3');
    }
    
    display(){
        var Title = createElement('h2');
        Title.html("HotWhells 2");
        Title.position(displayWidth/2,displayHeight-750);

        this.Input.position(displayWidth/2,displayHeight-350);

        this.Button.position(displayWidth/2+50,displayHeight-330);
        
        this.Button.mousePressed(()=>{
            this.Input.hide();
            this.Button.hide();
            
            player.nome = this.Input.value();
            
            playerCount += 1;
            player.indice = playerCount;
            player.UpdateCount(playerCount);
            player.Update();
           
            this.Tela_De_Carregamento.html("Olá "+player.nome+", aguarde os demais jogadores para uma melhor experiência...");
            this.Tela_De_Carregamento.position(displayWidth/2,displayHeight/2);
        });
    }

    Hide(){
      this.Input.hide();
      this.Button.hide();
      this.Tela_De_Carregamento.hide();
    }
}