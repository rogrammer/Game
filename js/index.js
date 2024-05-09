$(document).ready(function(){
    // When an image is clicked
    $('.language-logo').click(function(){
        // Remove selected class from all images
        $('.language-logo').removeClass('selected');
        // Add selected class to the clicked image
        $(this).addClass('selected');
    });

    // When the play button is clicked
    $('#playButton').click(function(){
        // Check if a logo is selected
        if ($('.language-logo.selected').length === 0) {
            alert('Please select a logo!');
            return; // Stop execution if no logo is selected
        }

        // Check if a difficulty level is selected
        var selectedDifficulty = $("input[type='checkbox'].switch:checked").attr("id");
        if (!selectedDifficulty) {
            alert('Please select a difficulty level!');
            return; // Stop execution if no difficulty level is selected
        }

        // Get the selected image
        var selectedImage = $('.language-logo.selected').attr('id');

        // Perform actions based on the selected image
        switch(selectedImage) {
            case 'html-logo':
                // Actions to perform when HTML logo is selected
                alert('HTML Logo selected! Difficulty: ' + selectedDifficulty);
                break;
            case 'css-logo':
                // Actions to perform when CSS logo is selected
                alert('CSS Logo selected! Difficulty: ' + selectedDifficulty);
                break;
            case 'js-logo':
                // Actions to perform when JS logo is selected
                alert('JS Logo selected! Difficulty: ' + selectedDifficulty);
                break;
            default:
                // This case should not be reached if a logo is selected
                console.error('Unexpected case!');
        }
    });

    // Select difficulty level checkboxes
    var difficultyCheckboxes = $("input[type='checkbox'].switch");

    // Add click event for each checkbox
    difficultyCheckboxes.click(function() {
        var selectedCheckbox = $(this);
        
        // Check if the selected checkbox is checked
        if (selectedCheckbox.prop("checked")) {
            // If a checkbox is checked, uncheck the others
            difficultyCheckboxes.not(selectedCheckbox).prop("checked", false);
        }
    });
});
