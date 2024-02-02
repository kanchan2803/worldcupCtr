var cntdwnDate = new Date("Nov 19, 2027 02:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = cntdwnDate - now;

    // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days+":";
    document.getElementById("hrs").innerHTML = hours+":";
    document.getElementById("min").innerHTML = minutes+":";
    document.getElementById("sec").innerHTML = seconds;

},1000)
