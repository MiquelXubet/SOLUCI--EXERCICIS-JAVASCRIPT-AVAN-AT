window.addEventListener("load", () => {
  document.getElementById("nuevoDato").onclick = function () {
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
});
