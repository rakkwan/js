/*
    Name: Jittima Goodrich
    Date: 4/24/2019
    File: array-object.js
    The function should convert the array into an
    object with properties containing the array values,
    grouped by type.
 */

function arrayObject(array)
{
    let result = {
        string: [],
        numbers: [],
        booleans: []
    };

    for (let i = 0; i < array.length; i++)
    {
        // if it's string then add the result to string
        if (typeof array[i] === "string")
        {
            result.string.push(array[i]);
        }
        // if it's number then add the result to numbers
        else if (typeof array[i] === "number")
        {
            result.numbers.push(array[i]);
        }
        // if it's boolean then add the result to booleans
        else
        {
            result.booleans.push(array[i]);
        }
    }

    document.getElementById("object2").innerHTML = JSON.stringify(result, null, 5);
}

let input = [-1, 5, "cat", false, 10.2, true, "dog", true];
document.getElementById("object1").innerHTML = input;

// call the function
arrayObject(input);


