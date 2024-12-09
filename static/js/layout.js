document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section, .section-spz"); // Selector combinado con una coma
    const body = document.querySelector("body");

    // Omitir la primera sección
    sections.forEach((section, index) => {
        if (index === 0) return; // Saltar la primera sección

        const titleText = section.dataset.title || ""; // Usa el atributo data-title para el texto del título
        const titleElement = document.createElement("div");

        // Configuración del título
        titleElement.classList.add("section-title");
        titleElement.innerText = titleText;
        body.appendChild(titleElement);

        // Detectar cuándo la sección está visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        titleElement.classList.add("visible");
                        setTimeout(() => {
                            titleElement.classList.remove("visible");
                        }, 1000); // Título visible por 1 segundo
                    }
                });
            },
            { threshold: 0.3 } // Se activa cuando el 50% de la sección está visible
        );

        observer.observe(section);
    });
});

window.onload = function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
};

