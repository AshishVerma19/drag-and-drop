function allowDrag(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("abc", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const dataId = event.dataTransfer.getData("abc");

    event.target.appendChild(document.getElementById(dataId));

}