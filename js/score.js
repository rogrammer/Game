document.addEventListener('DOMContentLoaded', function() {
    var scores = JSON.parse(localStorage.getItem('scores')) || [];
    var scoreboard = document.getElementById('scoreboard');

    // Debugging: Check if the element is found
    if (!scoreboard) {
        console.error("Scoreboard element not found");
        return;
    }

    if (scores.length === 0) {
        var emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `<td colspan="3">No scores available.</td>`;
        scoreboard.appendChild(emptyRow);
        return;
    }

    scores.sort((a, b) => (b.correct - a.correct) || (a.incorrect - b.incorrect));

    scores.forEach((score, index) => {
        var newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${score.name}</td>
            <td>${score.correct} True ${score.incorrect} False</td>
        `;
        scoreboard.appendChild(newRow);
    });
});
