import Level from "./level.js";
import Level1 from "./level/livelli.js";
import AnimatedObject from "./AnimatedObject.js";
import NinjaSprites from "./NinjaSprites.js";
export default class GameArea {
    
  constructor() {
    this.ninja= new AnimatedObject(NinjaSprites.running,60,60,10,120);
    this.level = new Level(
      20,
      20,
      32,
      32,
      Level1.terra,
      Level1.erba,
      Level1.mare,   
      Level1.barca,
      Level1.strada,
      "PathAndObjects.png",
      512,
      512
    );

    this.canvas = document.getElementById("gameArea");
    this.canvas.width = 640;
    this.canvas.height = 640;
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(this.updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
  }
  drawAnimatedObject(gameObject) {
    this.context.drawImage(
      gameObject.image,
      gameObject.x,
      gameObject.y,
      gameObject.width,
      gameObject.height
    );
  }
  clear = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  updateGameArea = () => {
    this.clear();
    this.level.draw(this.context);
    this.obstaclesVector = [];
    this.ninja.update(this.obstaclesVector)
    this.ninja.draw8(this.context)  };
}