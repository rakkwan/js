/*
    Name: Jittima Goodrich
    File: json-search.js
    Date: 5/1/2019
    This is a file to display search objects
 */

var json = [
    {
        "name": "Jane Doe",
        "sex": "F",
        "born": "1876",
        "died": "1956",
        "father": "Petrus de Milliano",
        "mother": "Sophia van Damme"
    },
    {
        "name": "Jane Ramirez",
        "sex": "F",
        "born": "2000",
        "died": "2019",
        "father": "Steve Ramirez",
        "mother": "Karen Ramirez"
    },
    {
        "name": "May Jensen",
        "sex": "F",
        "born": "1976",
        "died": "2000",
        "father": "Dave Bilc",
        "mother": "Maria Bilc"
    },
    {
        "name": "Bo Down",
        "sex": "M",
        "born": "1945",
        "died": "1980",
        "father": "Nick Down",
        "mother": "Sonya Down"
    },
    {
        "name": "David Bensen",
        "sex": "M",
        "born": "1900",
        "died": "1960",
        "father": "Mike Bensen",
        "mother": "Mary Bensen"
    }
];

// assign a function for a btn
let btn = document.getElementById('search');
btn.onclick = search;
// get the text box
let txt = document.getElementById('input');
// get the output to the div
let results = document.getElementById('output');

function search()
{
    let val = txt.value.toLowerCase();
    let count = 0;
    // json data
    for (let i = 0; i < json.length; i++)
    {
        // check the name input
        if (val.includes(json[i].name.toLowerCase().substring(0, val.length)))
        {
            results.innerHTML +=
                "<p>Name: " + json[i].name +
                "<br>Sex: " + json[i].sex +
                "<br>Born: "+ json[i].born +
                "<br>Die: "+ json[i].died +
                "<br>Father: "+ json[i].father+
                "<br>Mother: "+ json[i].mother
            "</p><br>";
            count++;
        }
    }

    // if the name is not found
    if (count === 0)
    {
        results.innerHTML = ("<p>No person found</p>");
    }
}
