const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Triángulo superior
ctx.beginPath();
ctx.moveTo(25, 25);
ctx.lineTo(105, 25);
ctx.lineTo(25, 105);
ctx.lineTo(25, 25);
ctx.closePath();
ctx.stroke();
ctx.fill();

// Triángulo inferior
ctx.beginPath();
ctx.moveTo(125, 125);
ctx.lineTo(125, 45);
ctx.lineTo(45, 125);
ctx.closePath();
ctx.stroke();

// Círculo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.arc(250, 80, 50, 0, 2 * Math.PI, true);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#3070d4";
ctx.fill();
