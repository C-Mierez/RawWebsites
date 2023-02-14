const pre = document.querySelector("pre");

document.addEventListener("mousemove", (event) => {
    rotateElement(event, pre);
});

function rotateElement(event, element) {
    // Get mouse position
    const x = event.clientX;
    const y = event.clientY;

    // Find middle of the page
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // Calculate the offset from the middle
    const offsetX = ((x - middleX) / middleX) * 80;
    const offsetY = ((y - middleY) / middleY) * -80;

    // Apply the rotation
    pre.style.setProperty("--rotateX", offsetY + "deg");
    pre.style.setProperty("--rotateY", offsetX + "deg");
}
