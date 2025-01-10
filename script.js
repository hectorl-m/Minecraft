// Selección de elementos
const infoButton = document.getElementById("info-button");
const infoDialog = document.getElementById("info-dialog");
const closeDialog = document.getElementById("close-dialog");
const dialogText = infoDialog.querySelector("p");

// Lista de curiosidades
const curiosidades = [
    "La unidad de medida en Minecraft se llama 'bloque', equivalente a un metro en el mundo real.",
    "El creador de Minecraft, Markus Persson, también conocido como Notch, desarrolló la primera versión del juego en solo una semana.",
    "Los Creepers se originaron debido a un error al programar a los cerdos.",
    "El bioma más raro del juego es el " + "'Mushroom Fields' (Campos de setas).",
    "Los pandas en Minecraft pueden estornudar y hacer que otros pandas reaccionen.",
    "Minecraft es el videojuego más vendido de todos los tiempos.",
    "Existen libros y estudios académicos sobre el uso de Minecraft como herramienta educativa."
];

// Mostrar un dato aleatorio en el diálogo
infoButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * curiosidades.length);
    dialogText.textContent = curiosidades[randomIndex];
    infoDialog.showModal();
});

// Cerrar el diálogo
closeDialog.addEventListener("click", () => {
    infoDialog.close();
});
