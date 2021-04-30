class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,300,200,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y, this.width, this.height);
    }
  }
