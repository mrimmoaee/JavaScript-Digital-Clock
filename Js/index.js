function fullTime() {
  var hour = document.getElementById("hour");
  var min = document.getElementById("min");
  var sec = document.getElementById("sec");
  var ampm = document.getElementById("am_pm");

  //now time function start...
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var a_p = "AM";

  if (h > 12) {
    h -= 12;
    a_p = "PM";
  }
  if (h == 0) {
    h = 12;
  }

  h = h < 10 ? `O${h}` : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hour.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  ampm.innerHTML = a_p;
}

var interval = setInterval(fullTime, 1000);
