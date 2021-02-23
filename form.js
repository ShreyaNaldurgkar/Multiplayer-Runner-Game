class Form{

    constructor(){
        this.title=createElement('h2');
     this.title.html("Mulitple Runner Game");
     this.input = createInput("name");
     this.button = createButton("Click me to start")
     this.message= createElement('h2')
     this.reset= createButton("reset")
 }
 display(){
     this.title.position(550,100);
     this.input.position(600,290);
     this.button.position(630,330);
     this.reset.position(100,100);
     this.reset.mousePressed(()=>{
         player.updatePlayerCount(0);
         game.updategamestate(0);

     })

     this.button.mousePressed(()=>{
         
         player.name=this.input.value();
         //console.log(name);
         playerCount = playerCount + 1;
         player.index = playerCount;
         player.updatePlayerCount(playerCount);
         player.updateInfo();
         this.input.hide();
         this.button.hide();
         this.message.html("Hello "+ player.name+" waiting for other players to join");
         this.message.position(440,330);
     })
 }

 hide(){
     this.message.hide();
     this.title.hide();
 }
}
    
