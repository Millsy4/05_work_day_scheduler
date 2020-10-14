// var hour = moment().hour();
var hour = 12;
// console.log(hour)
// var i = 11;
// var test = $(".number-" + 12).attr('value');
// console.log(test);
backgroundColors();
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