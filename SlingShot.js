class SlingShot {

    constructor(body1,point1){
        var options={
            bodyA:body1,
            pointB:point1,
            stiffness:0.04,
            length:10
        }
     this.Sling= Constraint.create(options);
     World.add(world,this.Sling);
    }
    fly(){
        this.Sling.bodyA=null
    }
    display(){
        if(this.Sling.bodyA)
        {
        var pointX=this.Sling.bodyA.position;
        var pointY=this.Sling.pointB;
        push();
        strokeWeight(5)
        line(pointX.x,pointX.y,pointY.x,pointY.y)
        pop();
        }
    }
}