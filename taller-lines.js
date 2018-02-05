function setup()
{
  noFill();
  createCanvas(300,300); 
}

function draw()
{
	countX = 0;
  countY = 0;
	while (countX <= 300)
	{
    if (countY > 300)
    {
     countY = 300; 
    }
  	line(countX, 0, countX, countY);
  	countX = countX + 5;
    countY = countY + 10;
  }
 
  
}
