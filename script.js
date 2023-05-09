const dragNdropList = document.querySelector(".drag-drop-list");
const items = dragNdropList.querySelectorAll(".items");
items.forEach(item => {
    
    item.addEventListener('dragstart', () =>setTimeout(item.classList.add('dragging'),0))

    item.addEventListener('dragend', ()=>item.classList.remove('dragging'))
});

const initItemList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");

    // Getting all items except currently dragging and making array of them
    let siblings = [...dragNdropList.querySelectorAll(".items:not(.dragging)")];

    // Finding the sibling after which the dragging item should be placed
    let nextSibling = siblings.find(sibling => e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2);

    // Inserting the dragging item before the found sibling
    dragNdropList.insertBefore(draggingItem, nextSibling);
}
dragNdropList.addEventListener("dragover", initItemList);
dragNdropList.addEventListener("dragenter", e => e.preventDefault());