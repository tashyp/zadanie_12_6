//Countries

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries); //attaching the request under the button from id search

function searchCountries() {
  	var countryName = $('#country-name').val(); //we take the value entered by the user and assign it to the variable
  	if(!countryName.length) countryName = 'Poland'; //add a condition to our function to check if the text field is empty
  	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
    })
}

