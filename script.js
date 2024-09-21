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
  event.preventDefault(); // Prevent default behavior

  if (draggedDiv !== event.target) {
    // Use getComputedStyle to get the background images
    let draggedBg = window.getComputedStyle(draggedDiv).getPropertyValue('background-image');
    let targetBg = window.getComputedStyle(event.target).getPropertyValue('background-image');

    // Log the images to check if they're correctly retrieved
    console.log('Dragged:', draggedBg);
    console.log('Dropped:', targetBg);

    // Swap the background images
    draggedDiv.style.backgroundImage = targetBg;
    event.target.style.backgroundImage = draggedBg;
  }
}
