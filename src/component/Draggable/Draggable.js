export class Draggable {
    $draggable;
    constructor(id, info) {
        const draggable = document.createElement("div");
        draggable.classList.add("Draggable");
        draggable.draggable = true;
        draggable.style.transition = "all 0.1s";
        if (id) {
            draggable.id = id;
        }
        if (info) {
            draggable.append(info);
        }

        this.$draggable = draggable;
        draggable.addEventListener("dragstart", (e) => {
            draggable.classList.add("dragging");
        });
        draggable.addEventListener("dragend", (e) => {
            draggable.classList.remove("dragging");
        })

        return draggable;
    }
}