// var countDownDate= new Date("Oct 13,2025 00:00:00").getTime();
// var X = setInterval(function()  {
//     var now = new Date().getTime();
//     var distance = countDownDate - now;
//   var day= Math.floor(distance/ (1000 * 60 *60 *24));
//   var hours= Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 *60));
//   var minutes=Math.floor((distance% (1000 * 60 *60))/(1000 * 60));
//   var seconds=Math.floor((distance% (1000 * 60))/1000);
//   document.getElementById("Days").innerHTML = day;
//   document.getElementById("Hours").innerHTML = hours;
//   document.getElementById("Minutes").innerHTML = minutes;
//   document.getElementById("Second").innerHTML = seconds;
// },1000 );


document.addEventListener("DOMContentLoaded", function () {
    var countDownDate = new Date("March 20, 2025 00:00:00").getTime();
    var launchTime = document.querySelector(".launch-time");
    var learnMoreBtn = document.querySelector("button");

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("Days").innerHTML = "00";
            document.getElementById("Hours").innerHTML = "00";
            document.getElementById("Minutes").innerHTML = "00";
            document.getElementById("Second").innerHTML = "00";
            return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("Days").innerHTML = days;
        document.getElementById("Hours").innerHTML = hours;
        document.getElementById("Minutes").innerHTML = minutes;
        document.getElementById("Second").innerHTML = seconds;

        launchTime.classList.add("shake");
        setTimeout(() => {
            launchTime.classList.remove("shake");
        }, 200);

    }, 1000);


});
