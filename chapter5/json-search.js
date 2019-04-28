$("#search").on("click", function()
{
    let output = $("#output");
    let val = $("#input").val().toLowerCase();
    let count = 0;

    // json data
    $.getJSON("json-search.json", function(result)
    {
        $.each(result, function(index, object)
        {
            let name = object.name.toLowerCase();
            if (name.includes(val))
            {
                output.append("<p><strong>Name:</strong> " + object.name + "</p>");
                output.append("<p><strong>Sex:</strong> " + object.sex + "</p>");
                output.append("<p><strong>Born:</strong> " + object.born + "</p>");
                output.append("<p><strong>Died:</strong> " + object.died + "</p>");
                output.append("<p><strong>Father:</strong> " + object.father + "</p>");
                output.append("<p><strong>Mother:</strong> " + object.mother + "</p><br>");

                count++;
            }
        });

        if (count == 0)
        {
            output.append("<p>No person found</p>");
        }
    });
});
