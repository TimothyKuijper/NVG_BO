import { GameRender } from "./gamerender.js";
import { GameLogic } from "./gamelogic.js";

class Game
{    
    constructor()
    {
        this.logic = new GameLogic(this);
        this.render = new GameRender(this);
        this.x = 0;
        this.y = 0;
    }  
    
    init()
    {
        let scope = this;

        this.render.canvas.addEventListener("mousemove", function (event) { scope.logic.mouseMoved(event);  } )
        setInterval(function() { scope.doGameFrame() },33);
    }

    mouseMoved

    doGameFrame()
    {
        this.logic.logic();
        this.render.render();
    }
}

let game = new Game()
game.init();
//game.render();