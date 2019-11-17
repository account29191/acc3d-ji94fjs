const chuckNorrisJoke = document.getElementById("chuckNorrisJoke");

function chuckNorris() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://api.chucknorris.io/jokes/random?&category=dev";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      parseJson(json);
    } else {
      console.log("error");
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function parseJson(json) {
  var fact = "<b>" + json["value"] + "</b>";
  document.getElementById("fact").innerHTML = fact;
}

document
  .getElementById("chuckNorrisButton")
  .addEventListener("click", function() {
    chuckNorris();
  });
