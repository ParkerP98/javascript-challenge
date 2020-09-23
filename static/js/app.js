// From data.js //
var tableData = data;

// Create 'tbody' var pointing to d3.select('tbody') //
var tbody = d3.select('tbody');

// Define function to create & populate html table with data //
function createTable(ufoData) {
    tbody.html('')
    ufoData.forEach((d_row) => {
        var t_row = tbody.append('tr');
        Object.values(d_row).forEach((val) => {
            var t_val = t_row.append('td');
            t_val.text(val);
        })
    })
};
// Function call //
createTable(tableData);
