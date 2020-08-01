class dustbin
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
            
          }
        
        this.object=Bodies.rectangle(x,y,width,height,options);
        
        this.width=width;
        this.height=height
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.object);
    }
    display()
    {
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,420, 500);
       // rect(this.object.position.x,this.object.position.y,this.width,this.height);
        
     }

}