class Bob {
  constructor(x, y) {
    var options = {
  
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
       'inertia' : Infinity,
       'slop' : 1,
       'frictionAir':0.0005
    }
    this.body =Matter.Bodies.circle(x, y,30, options);
    this.width = 30;
    this.height = 30;
  //  this.color = color
    World.add(world, this.body);
  }
  display(){
    
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(2)
    stroke("white")
    fill(0);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};