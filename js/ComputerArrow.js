class ComputerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.archerAngle = angle;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

 display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    Matter.Body.setAngle(this.body,-PI/4)
    pop();
  }
  shoot() {
    var myVelocity = p5.Vector.fromAngle(archerAngle.angle)
    myVelocity.mult(20)
   // Matter.Body.setVelocity(this.body, { x: 50, y: -30 })
   Matter.Body.setVelocity(this.body,{x : myVelocity.x ,y : myVelocity.y})
    Matter.Body.setStatic(this.body, false)

}
}
