/*Drop down menu from W3 Schools*/

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.addEventListener('scroll', function () {
    const heroSection = document.querySelector('.heroSection');
    const dropdown = document.querySelector('.dropdown');

    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const screenWidth = window.innerWidth;

    const offset = 400; // ✅ Show dropdown 100px before heroSection ends

    if (scrollY > heroBottom - offset && screenWidth <= 600) {
        dropdown.classList.add('show');
    } else {
        dropdown.classList.remove('show');
        document.getElementById("myDropdown").classList.remove("show"); // Also hide menu
    }
});

// Optional: Close dropdown menu if clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
};