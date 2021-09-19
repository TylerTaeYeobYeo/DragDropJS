import { IDHelper } from "../../core/IDhelper.js";

export class Droppable {
    $droppable;
    constructor(id) {
        this.getDragOverElement = this.getDragOverElement.bind(this);

        const droppable = document.createElement("section");
        droppable.classList.add("Droppable");
        droppable.style.transition = "all 0.1s";
        if (IDHelper.register(id)) {
            droppable.id = id;
        }
        this.$droppable = droppable;

        droppable.addEventListener("dragover", e => {
            e.preventDefault();
            const draggable = document.querySelector(".dragging");
            const dragOverElement = this.getDragOverElement(e.clientY);
            // console.log(draggable, ev);
            if (!dragOverElement) droppable.append(draggable);
            else {
                droppable.insertBefore(draggable, dragOverElement);
            }
        });

        return droppable;
    }

    getDragOverElement(y) {
        const draggable = [...this.$droppable.querySelectorAll(".Draggable:not(.dragging)")];
        
        let closest = null, offset = -Infinity;
        for (let i = 0; i < draggable.length; i++) {
            const box = draggable[i].getBoundingClientRect();
            const dragOffset = y - box.top - box.height / 2;
            if (dragOffset < 0 && dragOffset > offset) {
                closest = draggable[i];
                offset = dragOffset;
            }
        }
        return closest;
    }
}