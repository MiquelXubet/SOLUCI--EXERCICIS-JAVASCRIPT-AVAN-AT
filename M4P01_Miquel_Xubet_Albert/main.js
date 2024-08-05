// 1. Mostrar todas las cookies almacenadas:
console.log(document.cookie);

// 2. Añadir una nueva cookie “M4_UD01_P01” cuyo valor sea la fecha actual en milisegundos
// y su fecha de expiración el 31/12 del año actual.

const dateNow = Date.now();
const currentYear = new Date().getFullYear();
const expirationDate = new Date(currentYear, 11, 32).toUTCString();

document.cookie = `M4_UD01_P01=${dateNow}; expires=${expirationDate}; path=/`;

// 3. Mostrar como un objeto, utilizando el siguiente snippet, todas las cookies almacenadas,
// incluyendo la insertada previamente.

document.cookie.split(";").reduce((cookies, cookie) => {
  const [name, value] = cookie.split("=").map((c) => c.trim());
  return { ...cookies, [name]: value };
}, {});

// 4. Eliminar la cookie creada en el apartado anterior y volver a mostrar el objeto con las
// cookies actualizado.

document.cookie = "M4_UD01_P01=; expires= 01 Jan 2024 00:00:00 UTC; path=/";
console.log("Cookie eliminada:", document.cookie);
