// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  const position2 = { lat: -34.9204948, lng: -57.9928241 };
  const position3 = { lat: -6.227027, lng: -35.045171};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
  const marker2 = new AdvancedMarkerView({
    map: map,
    position: position2,
    title: "La Plata, Argentina",
  });
  const marker3 = new AdvancedMarkerView({
    map: map,
    position: position3,
    title: "Pipa, Brasil",
  });
}

initMap();