class stone {
    constructor(x,y,){
      var options={
          density:1.2,
          friction:1,
          restitution:0.8
      }
      this.body=Bodies.rectangle(x,y,40,40,options);
      this.width=40;
      this.height=40;
      this.image=loadImage("images/stone.png")
      World.add(world,this.body);
    }
    display(){
       var pos =this.body.position;
       var angle=this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          imageMode(CENTER);
          fill("blue");
          image(this.image,0,0,this.width,this.height);
          pop();
    }
}