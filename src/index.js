import { Draggable } from "./component/Draggable/Draggable.js";
import { Droppable } from "./component/Droppable/Droppable.js";

const app = document.querySelector("main");

const left = new Droppable("LeftPanel");
const right = new Droppable("RightPanel")

for (let i = 0; i < 6; i++) {
    (i < 3 ? left : right).appendChild(new Draggable(`${i + 1}`, `Tile ${i + 1}`))
}

app.appendChild(left);
app.appendChild(right);
