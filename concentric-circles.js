function setup()
{
  noFill();
  createCanvas(300,300); 
}

function draw()
{
	count = 0;
	while (count <= 300)
	{
  	ellipse(150, 150, count, count);
  	count = count + 10;
  }
}
