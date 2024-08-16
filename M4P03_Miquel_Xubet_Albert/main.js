window.addEventListener("load", () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      const primerasVeinteImagenes = data.slice(0, 20);
      const tabla = document.querySelector("#datosObtenidos tbody");
      // console.log(primerasVeinteImagenes);

      primerasVeinteImagenes.forEach((item) => {
        // console.log("Id del Registro:", item.id);
        const fila = document.createElement("tr");

        const celdaId = document.createElement("td");
        celdaId.textContent = item.id;
        fila.appendChild(celdaId);

        const albumId = document.createElement("td");
        albumId.textContent = item.albumId;
        fila.appendChild(albumId);

        const tituloAlbum = document.createElement("td");
        tituloAlbum.textContent = item.title;
        fila.appendChild(tituloAlbum);

        const imagen = document.createElement("td");
        imagen.textContent = item.thumbnailUrl;
        fila.appendChild(imagen);

        tabla.appendChild(fila);
      });
    })

    .catch((error) => {
      console.error("Error:", error);
    });
});
