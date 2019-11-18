function showCensusData() {
  const getData = document.getElementById("censusData");
  if (getData.classList.contains("censusDataHidden")) {
    getData.classList.remove("censusDataHidden");
    getData.classList.add("animated", "fadeInDownBig");
    getData.classList.add("censusData");
  } else {
    getData.classList.remove("censusData");
    getData.classList.add("censusDataHidden");
  }
  getCensusData();
  removeElementNow();

  function getCensusData() {
    fetch(
      "https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE_=7&for=state:*&key=7845bd6b4f2077682a4656f0bf674321a0a94d0e"
    )
      .then(response => response.json())
      .then(data => {
        data.forEach(function(state) {
          const censusData = document.getElementById("censusData");
          const stateData = document.createElement("p");
          stateData.innerHTML =
            `State: ${state[0]}` + "<br/>" + `Population ${state[1]}`;
          stateData.style.color = "whiteSmoke";
          stateData.style.fontSize = "18px";
          censusData.appendChild(stateData);
          console.log(state[0]);
        });
      });

    setTimeout(function removeElementNow() {
      const censusData = document.getElementById("censusData");
      const censusDataChild = censusData.firstChild;
      censusData.removeChild(censusDataChild);
    }, 1500);
  }
}
