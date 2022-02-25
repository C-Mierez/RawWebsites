/* -------------------------- Clicking the Sidebar -------------------------- */
const menuIconButton = document.querySelector("[js-sidebar-button]");
const sidebar = document.querySelector("[js-sidebar]");

menuIconButton.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
});

/* ------------------------------ Active Cards ------------------------------ */
const sidebarList = document.getElementsByClassName("sidebar-list");

Array.from(sidebarList).map((list) => {
    const cards = list.getElementsByClassName("card");

    Array.from(cards).map((card) => {
        card.addEventListener("click", () => {
            console.log("HIIII");
            var current = document.getElementsByClassName("card active");

            // If there's no active class
            if (current.length > 0) {
                current[0].className = current[0].className.replace(
                    " active",
                    ""
                );
            }
            card.className += " active";
        });
    });
});

// const content = document.getElementsByClassName("content");

// const other = document.getElementById("other");
// other.addEventListener("click", () => {
//     console.log("Hi");
//     content.innerHTML =
//         '<object type="text/html" data="./pages/Other.html" ></object>';
// });
