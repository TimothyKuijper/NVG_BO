

export class GameLogic
{
    constructor(game)
    {
        this.game = game;
    }
    
    mouseMoved(event)
    {wwwwww
        this.game.player.x = event.offsetX;
        this.game.player.y = event.offsetY;
    }

    logic()
    {
      
    }        
}