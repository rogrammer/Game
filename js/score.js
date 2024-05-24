document.addEventListener("DOMContentLoaded", function () {
  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  var scoreboard = document.getElementById("scoreboard");

  // Debugging: Check if the element is found
  if (!scoreboard) {
    console.error("Scoreboard element not found");
    return;
  }

  if (scores.length === 0) {
    var emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `<td colspan="3">No scores available.</td>`;
    scoreboard.appendChild(emptyRow);
    return;
  }

  scores.sort((a, b) => b.correct - a.correct || a.incorrect - b.incorrect);

  scores.forEach((score, index) => {
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${score.name}</td>
            <td>${score.correct} True ${score.incorrect} False</td>
        `;
    scoreboard.appendChild(newRow);
  });
});

$(document).ready(function () {
  const imageUrl =
    "https://purepng.com/public/uploads/large/purepng.com-gold-cup-trophygolden-cupgoldtrophymedal-1421526534849zfzh1.png";

  // display image with ajax
  $.ajax({
    url: imageUrl,
    type: "GET",
    success: function () {
      $("#image-container").html(
        `<img src="${imageUrl}" alt="Gold Cup Trophy">`
      ); // add a img tag
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error loading image:", textStatus, errorThrown);
      $("#image-container").text(
        "There was an error loading the image. Please try again."
      );
    },
  });
});
