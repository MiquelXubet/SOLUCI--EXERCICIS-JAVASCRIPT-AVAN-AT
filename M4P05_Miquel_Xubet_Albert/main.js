if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Crear el mapa de la ubicación del usuario
      const map = L.map("map").setView([lat, lon], 15);

      // Añadir OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Añadir marcador en la ubicación del usuario
      L.marker([lat, lon]).addTo(map).bindPopup("¡Estás aquí!").openPopup();
    },
    function (error) {
      document.getElementById(
        "map"
      ).textContent = `Error al obtener la ubicación: ${error.message}`;
    }
  );
} else {
  document.getElementById("map").textContent =
    "La geolocalización no está disponible en tu navegador.";
}
