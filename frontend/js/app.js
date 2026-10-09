const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
    console.log('test');
    
});

// Close the mobile menu after selecting a link
navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Reveal sections when they enter the viewport
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.animate(
                        [
                            { opacity: 0, transform: "translateY(20px)" },
                            { opacity: 1, transform: "translateY(0)" }
                        ],
                        {
                            duration: 650,
                            easing: "ease-out",
                            fill: "backwards"
                        }
                    );

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    sections.forEach((section) => observer.observe(section));
}