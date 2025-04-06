document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Initialize the Leaflet Map ---------- */
  var mapElement = document.getElementById("interactiveMap");
  if (!mapElement) {
    console.error('Map element with id "interactiveMap" not found.');
    return;
  }
  
  // Set initial coordinates for Bristol and a default zoom level
  var map = L.map("interactiveMap").setView([51.4545, -2.5879], 12);
  
  // Add OpenStreetMap tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  /* ---------- Handling Location Changes ---------- */
  // Define preset locations with their coordinates
  var locationCoordinates = {
    "city-center": [51.4545, -2.5879],
    "north": [51.5000, -2.6000],
    "south": [51.4200, -2.5800],
    "west": [51.4600, -2.6500]
  };

  var locationSelect = document.getElementById("location");
  if (locationSelect) {
    locationSelect.addEventListener("change", function () {
      var selectedLocation = this.value;
      var coord = locationCoordinates[selectedLocation];
      if (coord) {
        // Center the map on the new location
        map.setView(coord, 13);
      }
    });
  } else {
    console.warn('Select element with id "location" not found.');
  }

  /* ---------- Setup for Pollutant Markers ---------- */
  // Array to hold active pollutant markers (for easy removal)
  var pollutantMarkers = [];

  /* ---------- Displaying Real Pollutant Markers ---------- */
  function loadRealPollutantData(pollutantKey) {
    // Replace YOUR_RESOURCE_ID with the actual resource id from Bristol Open Data.
    var apiUrl = 'https://data.bristol.gov.uk/api/3/action/datastore_search?resource_id=YOUR_RESOURCE_ID&limit=100';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const records = data.result.records;
        // Filter records for the chosen pollutant (e.g., "pm10", "pm2.5", "ozone")
        // Adjust the field names "pollutant_type", "latitude", "longitude", and "pollutant_value" as per your dataset.
        const filteredRecords = records.filter(record => 
          record.pollutant_type && record.pollutant_type.toLowerCase() === pollutantKey
        );
        
        // Remove any existing pollutant markers from the map
        pollutantMarkers.forEach(function (marker) {
          map.removeLayer(marker);
        });
        pollutantMarkers = [];

        // Create and add markers for each record
        filteredRecords.forEach(record => {
          var lat = parseFloat(record.latitude);
          var lng = parseFloat(record.longitude);
          if (!isNaN(lat) && !isNaN(lng)) {
            var marker = L.marker([lat, lng])
              .addTo(map)
              .bindPopup("Area with " + pollutantKey.toUpperCase() + 
                         "<br> Value: " + record.pollutant_value);
            pollutantMarkers.push(marker);
          }
        });

        // Adjust the view to include all pollutant markers if available
        if (pollutantMarkers.length) {
          var group = L.featureGroup(pollutantMarkers);
          map.fitBounds(group.getBounds());
        }
      })
      .catch(error => console.error('Error fetching real pollutant data:', error));
  }

  // Event listener for the pollutant icon button click
  var pollutantBtn = document.getElementById("pollutantIcon");
  if (pollutantBtn) {
    pollutantBtn.addEventListener("click", function () {
      // For this example, show "pm10". Change the pollutantKey as needed.
      var pollutantKey = "pm10";
      loadRealPollutantData(pollutantKey);
    });
  } else {
    console.warn('Button with id "pollutantIcon" not found.');
  }

  /* ---------- Initialize Air Quality Graph using Chart.js ---------- */
  var graphCanvas = document.getElementById("airQualityGraph");
  if (graphCanvas) {
    var ctx = graphCanvas.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
          label: "PM2.5 Levels (µg/m³)",
          data: [25, 30, 18, 40, 20],
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "PM2.5 Levels (µg/m³)" }
          },
          x: {
            title: { display: true, text: "Days of the Week" }
          }
        }
      }
    });
  } else {
    console.warn('Canvas element with id "airQualityGraph" not found.');
  }

  /* ---------- Additional Helper Functions ---------- */
  // A placeholder function to simulate refreshing data (can be linked to a button)
  window.refreshData = function () {
    // Implement your data refresh logic here (e.g., AJAX calls to update map markers and graphs)
    alert("Data refreshed!");
  };
});
