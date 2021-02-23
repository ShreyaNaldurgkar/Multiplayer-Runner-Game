class Game {
    constructor() {

    }
    getgamestate() {
        //to get the value of gamestate from the database
        var gamestateref = database.ref('gameState');
        gamestateref.on("value", function (data) {
            gameState = data.val();
        })
    }
    updategamestate(state) {
        //to update the value of gamestate in database
        database.ref('/').update({
            gameState: state
        });

    }
    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getPlayerCount()

            }


            form = new Form();
            form.display();

        }

        player = createSprite(50,displayHeight-180,10,10);
        player.addAnimation("player",playerimg);
        player.scale = 0.4;
       
        player2 = createSprite(50,displayHeight/2 - 90, 10,10);
        player2.addAnimation("player2",player2img);
        player2.scale = 1.4;
  


    }
    /*play() {
        console.log("game has started");
        form.hide();
        Player.getAllPlayers();
        player.getCarsAtEnd();
        console.log(allPlayers)

        

        if (allPlayers !== undefined) {
            var index = 0;
            var x = 200;
            var y;
            for (var plr in allPlayers) {
                index = index + 1;
                x = x + 220
                y = displayHeight - allPlayers[plr].distance
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if (index == player.index) {
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y
                    cars[index - 1].shapeColor = "red"
                    stroke ("green");
                    strokeWeight(4);
                    ellipse(x,y,60,60);

                }

            }




        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance + 10
            player.updateInfo();

        }

        if(player.distance>=4260){
            gameState=2
            player.rank = player.rank+1;
            Player.updateCarsAtEnd(player.rank)

        }
        drawSprites();
    }
    end() {
        console.log("game ended")
        console.log(player.rank);

    }*/
}
