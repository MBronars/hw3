function setup()
{
  noFill();
  createCanvas(300,300); 
}

function draw()
{
  strokeWeight(20)
	count = 0;
	while (count <= 160)
	{
    
  	line(0, count, 300, count);
  	count = count + 40;
    
  }
  count = 0;
	while (count <= 300)
	{
    
  	line(count, 160, count, 300);
  	count = count + 40;
    
  }
 
  
}
