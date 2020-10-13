var hour = moment().hour();
console.log(hour)
var i = 11;
var test = $(".number-" + 12).attr('value');
console.log(test);
backgroundColors();
function backgroundColors() {
  for (var i = 0; i < 24; i++) {
    if (i < test) {
      $(".number-" + i).addClass('past');
    }
  }
}