for (let i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("Hee Haw!");
    }
    else if (i % 5 == 0)
    {
        console.log("Haw!");
    }
    else if (i % 3 == 0)
    {
        console.log("Hee!");
    }
    else
    {
        console.log(i);
    }
}