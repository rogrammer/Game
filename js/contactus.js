$( function() {
    $( "#datepicker" ).datepicker();
  } );

const countries = [
"United States",
"China",
"India",
"Indonesia",
"Pakistan",
"Brazil",
"Nigeria",
"Bangladesh",
"Russia",
"Mexico",
"Japan",
"Ethiopia",
"Philippines",
"Egypt",
"Vietnam",
"DR Congo",
"Turkey",
"Iran",
"Germany",
"Thailand",
"United Kingdom",
"France",
"Italy",
"Tanzania",
"South Africa"
];

$( "#country" ).autocomplete({
        source: countries
      });