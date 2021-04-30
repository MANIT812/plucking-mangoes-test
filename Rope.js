class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:50,
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA=null;
    }
    display(){
        if(this.rope.bodyA){
            line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);   
        }
    }
}