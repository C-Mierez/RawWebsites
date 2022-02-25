const menuIconButton = document.querySelector("[js-sidebar-button]");
const sidebar = document.querySelector("[js-sidebar]");

menuIconButton.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
});
