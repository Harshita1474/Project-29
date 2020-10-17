class Polygon {
    constructor(x,y,radius) {
        var options={
            isStatic: true
        }
      this.body = Bodies.circle(x,y,radius);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };
  
