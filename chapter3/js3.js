/*
    Name: Jittima Goodrich
    Date: 4/12/2019
    File: js3.js
    create a function heeHaw()

 */

window.onload = heeHaw();

function heeHaw()
{
    let theNumber = Number(prompt("Pick a number"));
    if (Number.isNaN(theNumber))
    {
        console.log("Please Enter a valid number!");
    }
    else if (theNumber < 0)
    {
        console.log("Please enter a positive number");
    }
    else
    {
        for (let i = 1; i <= theNumber; i++)
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
    }
}