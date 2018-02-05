function setup()
{
  noFill();
  createCanvas(300,300); 
}

function draw()
{
	count = 0;
	while (count <= 150)
	{
  	line(150-count, count, 150+count, count);
  	count = count + 10;
  }
  count=0;
  while (count <= 150)
	{
  	line(count, 150+count, 300-count, 150+count);
  	count = count + 10;
  }
}
