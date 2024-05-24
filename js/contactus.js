$(function () {
  $("#datepicker").datepicker();
});

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
  "South Africa",
];

//  for auto complete country
$("#country").autocomplete({
  source: countries
});

$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    
    var name = $("#name").val();
    var surname = $("#surname").val();
    var email = $("#email").val();
    var country = $("#country").val();
    var birthdate = $("#datepicker").val();
    var message = $("#message").val();

    // Form validation
    if (
      name == "" ||
      surname == "" ||
      email == "" ||
      country == "" ||
      birthdate == "" ||
      message == ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Submit the form if all fields are filled

    // If submission is successful, show success message
    $("#successMessage").show();

    //reset values
    $("input[type=text], input[type=email], textarea").val("");
  });
});
