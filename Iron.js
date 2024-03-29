class Iron{
    constructor(x, y){
        var options = {
            'restitution' : 0.7,
            'friction' : 1.1,
            'density' : 5.5
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 75;
        this.height = 40;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("silver");
        rect(0, 0, this.width, this.height);
       
        pop();
    }
}