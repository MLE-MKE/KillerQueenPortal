// Get elements
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("pdfModal");
const closeModal = document.querySelector(".close");

// Show modal when clicking the main button
openModalButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when clicking the close button
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if the user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
