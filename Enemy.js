class Enemy {
    constructor(x,y,width,height) {
      var options = {
          restitution: 0.0008,
      }
      this.image = loadImage("monster1.png")
      this.image1 = loadImage("monster2.png")
      this.body = Bodies.rectangle(x+50,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle  = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
    //   fill("yellow");
    //   rect(0, 0, this.width, this.height);
       image(this.image,0,0,this.width-50,this.height);
       if(this.body.speed>3){
        image(this.image1,0,0,this.width-50,this.height);
       }
      pop();
    }
  }