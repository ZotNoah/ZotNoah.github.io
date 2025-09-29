const filterDropdown = document.getElementById("techFilter");
const projectCards = document.querySelectorAll(".project-card");

filterDropdown.addEventListener("change", (e) => {
    const filter = e.target.value.toLowerCase();

    projectCards.forEach(card => {
    const tags = card.getAttribute("data-tags").toLowerCase();

    if (filter === "all" || tags.includes(filter)) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
    });
});