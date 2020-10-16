// Create variables to hold the information that we get from momentjs
var hour = moment().hour();
var dayOfWeek = moment().isoWeekday();
var month = moment().month();
var dateOfWeek = moment().date();

// Create a variable arrays to hold the months and the days of the week
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Create a function that controls the background colors of the columns depending on time
function backgroundColors() {
  for (var i = 9; i <= 17; i++) {
    if (i < hour) {
      $(".number-" + i).addClass('past');
    }
    else if (i == hour) {
      $(".number-" + i).addClass('present');
    }
    else if (i > hour) {
      $(".number-" + i).addClass('future');
    }
  }
}

// Add a click function to the save button that will take the information in the textarea and save it to local storage
$('.saveBtn').on('click', function() {
  for (var i = 9; i <= 17; i++) {
    if ($('ta' + i) !== null) {
      var test = $('.ta-' + i).val();
      localStorage.setItem(i, test);
    }
  }
})

// Create a function that will get the values from the local storage and display them on page reloads
function getLocalStor() {
  for (var i = 9; i <= 17; i++) {
    var getStor = localStorage.getItem(i);
    console.log(getStor);
    $('.ta-' + i).val(getStor);
  }
}

// Create a function that sets the day of the week depending on the variables from momentjs
function setDay() {
  var day = daysOfWeek[(dayOfWeek - 1)]
  $('#currentDay').text(day + ', ' + months[month] + ' ' + dateOfWeek);
}

// Initialize all starting functions
getLocalStor();
setDay();
backgroundColors();