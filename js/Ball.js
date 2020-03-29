class Ball{
    constructor(x,y,radius){

        var options = {
            bodyA : ball,
            bodyB : holder,
            stiffness: 0.004,
            length : 100
          }
        this.body  = Bodies.circle(220,200,40,ball_options);
World.add(world,this.body);
    }
}