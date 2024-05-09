$(document).ready(function(){
    // Click event for HTML Logo
    $('#html-logo').click(function(){
      // Show questions related to HTML
      showHTMLQuestions();
    });
  
    // Click event for CSS Logo
    $('#css-logo').click(function(){
      // Show questions related to CSS
      showCSSQuestions();
    });
  
    // Click event for JS Logo
    $('#js-logo').click(function(){
      // Show questions related to JavaScript
      showJSQuestions();
    });
  });
  
  function showHTMLQuestions() {
    // Show questions related to HTML
    alert('HTML Questions will be displayed');
  }
  
  function showCSSQuestions() {
    // Show questions related to CSS
    alert('CSS Questions will be displayed');
  }
  
  function showJSQuestions() {
    // Show questions related to JavaScript
    alert('JavaScript Questions will be displayed');
  }
  
  