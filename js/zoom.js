// Función para abrir el modal y mostrar la imagen en grande
function openModal(event, imageUrl) {
    event.preventDefault(); // Evita que la página haga scroll hacia el inicio

    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");

    // Cambiar la imagen del modal con la imagen que se pasa como parámetro
    modalImg.src = imageUrl;  // Ruta de la imagen que quieres mostrar en zoom
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}