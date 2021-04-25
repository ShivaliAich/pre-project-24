class Dustbin {
    constructor (x,y,width,height){
        var options ={
            isStatic : 1,
        }
    this.width = width;
    this.height = height;
    
}
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x, pos.y, this.width, this.height);
}
}