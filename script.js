function updateMap () {
  fetch ("data.json")
  .then (response => response.json())
  .then (rsp => {
    console.log (rsp)
    rsp.data.forEach (element => {
      latitude = element.latitude;
      longitude = element.longitude;
      cases = element.infected;
      if (cases > 5000) {
        color = "rgb(236,43,43)";
      } else if (cases > 3000) {
        color = "rgb(0,0,0)";
      } else if (cases > 1000) {
        color = "rgb(249,173,58)";
      } else if (cases > 350) {
        color = "rgb(243,247,79)";
      } else if (cases > 80) {
        color = "rgb(108,241,248)";
      } else if (cases < 80) {
        color = "rgb(114,242,46)";
      } else {
        color = `rgb(${cases},0,0)`;
      }

      //Mark on the Map.
      new mapboxgl.Marker({
        draggable: false,
        color: color
      })
      .setLngLat([longitude, latitude])
      .addTo(map);
    });
  })
}

let interval = 1000;
setInterval (updateMap, interval);