   // Get elements
   const openModalButton = document.getElementById("openModalButton");
   const modal = document.getElementById("pdfModal");
   const closeModal = document.querySelector(".close");
   var modalContent = document.querySelector('.modal-content');

   // Variables to store initial mouse position and modal position
   var offsetX, offsetY, isDragging = false;

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

   // Function to handle mouse down event (start dragging)
   modalContent.addEventListener('mousedown', function (e) {
       isDragging = true;
       offsetX = e.clientX - modalContent.getBoundingClientRect().left;
       offsetY = e.clientY - modalContent.getBoundingClientRect().top;
       modalContent.style.cursor = 'move'; // Change cursor to 'move' while dragging
   
      // Ensure modal content is always on top during dragging
      modalContent.style.zIndex = '10000'; // Keep it at the front
    });

   // Function to handle mouse move event (move the modal)
   document.addEventListener('mousemove', function (e) {
       if (isDragging) {
           var x = e.clientX - offsetX;
           var y = e.clientY - offsetY;

           // Update the modal position
           modalContent.style.left = x + 'px';
           modalContent.style.top = y + 'px';
       }
   });

   // Function to handle mouse up event (stop dragging)
   document.addEventListener('mouseup', function () {
       isDragging = false;
       modalContent.style.cursor = 'default'; // Revert cursor to default
       modalContent.style.zIndex = '10000'; // Maintain z-index when dragging stops 
    });
