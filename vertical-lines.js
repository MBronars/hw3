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
  	line(count, 0, count, 300);
  	count = count + 10;
  }
}
