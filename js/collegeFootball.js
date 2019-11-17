function showFootballData() {
  function getFootballData() {
    fetch("https://api.collegefootballdata.com/venues")
      .then(response => response.json())
      .then(data => {
        data.forEach(function(venue) {
          const newElement = document.createElement("p");
          const venues = document.getElementById("footballData");
          newElement.innerHTML =
            `Name: ${venue.name}` +
            "<br/>" +
            `Capacity: ${venue.capacity}` +
            "<br>" +
            `Location: ${venue.city}, ${venue.state}` +
            "<br/>" +
            `Built in ${venue.year_constructed}`;

          venues.appendChild(newElement);
          newElement.style.color = "whitesmoke";
          newElement.style.fontSize = "17px";
          console.log(venue);
        });
      });
  }
  getFootballData();
  const footballData = document.getElementById("footballData");
  if (footballData.classList.contains("footballDataHidden")) {
    footballData.classList.remove("footballDataHidden");
    footballData.classList.add("footballData");
    footballData.classList.add("animated", "fadeInUp");
  } else {
    footballData.classList.remove("footballData");
    footballData.classList.add("footballDataHidden");
  }
}
