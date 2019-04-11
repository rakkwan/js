/*
    Name: Jittima Goodrich
    Date: 4/9/2019
    File: js2.js
    Print Hee Haw to the console!
 */

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