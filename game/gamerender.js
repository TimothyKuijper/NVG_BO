

export class GameRender
{
  constructor(game)
  {
    this.game = game;
    this.canvas = document.getElementById("canvas");
    this.g = canvas.getContext("2d");  
  } 
  render()
  {
      let g = this.g;

      g.fillStyle = "#000000";
      g.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      g.fillStyle = "#1eca07";
      let player = this.game.player;
      g.fillRect(player.x, player.y, player.w, player.h);

  } 
}