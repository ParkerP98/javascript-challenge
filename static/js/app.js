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

// assign button to d3
var button = d3.select("#filter-btn");


button.on('click', function(){
    // select the input element and get the html node
    var input = d3.select('.form-control');
    // get input value
    var inputD = input.property('value');
    // filter data based on input date
    var filteredData = tableData.filter(ufo => ufo.datetime === inputD);
    // select table body
    var tbody = d3.select('tbody')
    // clean the table body
    tbody.html('');

    // I may be able to use my createTable function, but for some reason it wasn't working
    //loop through populate tbody with filtered data
    filteredData.forEach(function(ufo){
        var row = tbody.append('tr');
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append('td').text(value);
        })
    })
});
