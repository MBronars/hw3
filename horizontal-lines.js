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
  	line(0, count, 300, count);
  	count = count + 10;
  }
}
