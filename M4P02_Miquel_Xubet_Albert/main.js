window.addEventListener("load", () => {
  document.getElementById("nuevoDato").onclick = () => {
    const clave = "M4_UD02_P02";
    const valor = "Miquel Xubet Albert";
    console.log(localStorage);

    if (localStorage.getItem(clave) !== null) {
      alert("Error: El dato con la clave '" + clave + "' ya existe.");
    } else {
      localStorage.setItem(clave, valor);
      alert("Dato guardado con éxito: " + clave + " = " + valor);
    }
  };

  document.getElementById("nuevoDato2").onclick = () => {
    const clave = "Date";
    const valor = Date.now();

    sessionStorage.setItem(clave, valor);
    alert("Fecha guardada en milisegundos: " + valor);
  };

  document.getElementById("mostrarDatos").onclick = () => {
    let datos = "<h2>Datos Almacenados:</h2>";

    // Mostrar los datos de localStorage
    datos += "<h3>localStorage:</h3>";
    for (let i = 0; i < localStorage.length; i++) {
      const clave = localStorage.key(i);
      const valor = localStorage.getItem(clave);
      datos += `<p>${clave}: ${valor}</p>`;
    }

    //Mostrar los datos de SessionStorage
    datos += "<h3>SessionStorage:</h3>";
    for (let i = 0; i < sessionStorage.length; i++) {
      const clave = sessionStorage.key(i);
      const valor = sessionStorage.getItem(clave);
      datos += `<p>${clave}: ${valor}</p>`;
    }

    document.getElementById("DatosAlmacenados").innerHTML = datos;
  };
});
