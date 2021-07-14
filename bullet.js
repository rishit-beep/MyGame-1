class Bullet{
    constructor(x, y, width, height, angle,force) {
        var options = {
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("game/bomb.jpeg");
        Matter.Body.setAngle(this.body,PI/360*angle);
        Matter.Body.setVelocity(this.body,{x:force*-3,y:force*-1});
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}