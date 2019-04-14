/*
    Name: Jittima Goodrich
    Date: 4/12/2019
    File: js3.js
    create a function heeHaw()

 */
//window.onload = heeHaw(number);

function heeHaw(number)
{
    console.log("The number is " + number);
    if (Number.isNaN(number))
    {
        console.log("Please Enter a valid number!");
    }
    else if (number < 0)
    {
        console.log("Please enter a positive number");
    }
    else
    {
        for (let i = 1; i <= number; i++)
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

heeHaw(-2);
heeHaw(50);
heeHaw(100);
heeHaw(-30);


