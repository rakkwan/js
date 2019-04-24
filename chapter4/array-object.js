function arrayObject(array)
{
    let result = {
        string: [],
        numbers: [],
        booleans: []
    };

    for (let i = 0; i < array.length; i++)
    {
        if (typeof array[i] === "string")
        {
            result.string.push(array[i]);
        }
        else if (typeof array[i] === "number")
        {
            result.numbers.push(array[i]);
        }
        else
        {
            result.booleans.push(array[i]);
        }
    }
    return result;
}