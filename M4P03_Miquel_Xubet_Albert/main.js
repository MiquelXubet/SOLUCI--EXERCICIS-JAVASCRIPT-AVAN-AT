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

        const celdaEliminarRegistro = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
          fetch(`https://jsonplaceholder.typicode.com/photos/${item.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                console.log(`Registro con ID ${item.id} eliminado de la API.`);

                tabla.removeChild(fila);
              } else {
                console.error(
                  `Error al eliminar el registro con ID ${item.id}.`
                );
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });

        celdaEliminarRegistro.appendChild(botonEliminar);
        fila.appendChild(celdaEliminarRegistro);

        tabla.appendChild(fila);
      });
    })

    .catch((error) => {
      console.error("Error:", error);
    });

  document
    .getElementById("botonNuevoRegistro")
    .addEventListener("click", () => {
      const nuevaEntrada = {
        albumId: 1,
        thumbnailUrl: null,
        title: "Miquel_Xubet_Albert",
        url: "https://cursos.com/wp-content/uploads/2021/04/academia-tokio-school.jpg",
      };

      fetch("https://jsonplaceholder.typicode.com/photos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaEntrada),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Nuevo Registro añadido correctamente a la API:", data);
        })
        .catch((error) => {
          console.error("Error al añadir el nuevo registro.", error);
        });
    });
});
