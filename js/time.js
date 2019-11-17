function showDay() {
  var date = new Date();
  var day = new Array(7);
  day[0] = "Sunday";
  day[1] = "Monday";
  day[2] = "Tuesday";
  day[3] = "Wednesday";
  day[4] = "Thursday";
  day[5] = "Friday";
  day[6] = "Saturday";

  var today = day[date.getDay()];
  if (today === day[5]) {
    document.getElementById("day").innerHTML = `It's finally ${today}!`;
  } else if (today === day[6]) {
    document.getElementById(
      "day"
    ).innerHTML = `It's ${today}. Have a great weekend!`;
  } else if (today === day[0]) {
    document.getElementById("day").innerHTML = `It's ${today}. Enjoy!`;
  } else if (today === day[1]) {
    document.getElementById("day").innerHTML = `It's ${today}. Back to work.`;
  } else if (today === day[2]) {
    document.getElementById(
      "day"
    ).innerHTML = `It's ${today}. Have a great day!`;
  } else if (today === day[3]) {
    document.getElementById("day").innerHTML = `It's ${today}. Half way there.`;
  } else {
    document.getElementById(
      "day"
    ).innerHTML = `It's ${today}. Tomorrow is Friday!`;
  }
  console.log("time is working");
}

showDay();
