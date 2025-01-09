// Selección de elementos
const infoButton = document.getElementById("info-button");
const infoDialog = document.getElementById("info-dialog");
const closeDialog = document.getElementById("close-dialog");

// Mostrar el diálogo
infoButton.addEventListener("click", () => {
    infoDialog.showModal();
});

// Cerrar el diálogo
closeDialog.addEventListener("click", () => {
    infoDialog.close();
});
