var hour = moment().hour();
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var dayOfWeek = moment().isoWeekday();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = moment().month();
var dateOfWeek = moment().date();

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

$('.saveBtn').on('click', function() {
  for (var i = 9; i <= 17; i++) {
    if ($('ta' + i) != null) {
      var test = $('.ta-' + i).val();
      console.log(test);
      localStorage.setItem(i, test);
    }
  }
})

function setDay() {
  var day = daysOfWeek[(dayOfWeek - 1)]
  $('#currentDay').text(day + ', ' + months[month] + ' ' + dateOfWeek);
}

setDay();
backgroundColors();