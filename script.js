const divs = document.querySelectorAll('.image');

divs.forEach(div => {
  div.addEventListener('dragstart', handleDragStart);
  div.addEventListener('dragover', handleDragOver);
  div.addEventListener('drop', handleDrop);
});

let draggedDiv = null;

function handleDragStart(event) {
  draggedDiv = event.target; // Store the dragged div
}

function handleDragOver(event) {
  event.preventDefault(); // Allow the drop event to be fired
}

function handleDrop(event) {
    if (draggedDiv !== event.target) {
        // Swap background images
        let draggedBg = window.getComputedStyle(draggedDiv).backgroundImage;
        let targetBg = window.getComputedStyle(event.target).backgroundImage;

        draggedDiv.style.backgroundImage = targetBg;
        event.target.style.backgroundImage = draggedBg;

        // Swap text content (Image 1, Image 5, etc.)
        let draggedText = draggedDiv.textContent;
        let targetText = event.target.textContent;

        draggedDiv.textContent = targetText;
        event.target.textContent = draggedText;
    }
}

