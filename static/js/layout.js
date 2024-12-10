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
                        }, 1500); // Título visible por 1 segundo
                    }
                });
            },
            { threshold: 0.3 } // Se activa cuando el 50% de la sección está visible
        );

        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const chapterP = document.getElementById("chapter-p");
    const home = document.getElementById("home");
    const elementsToAnimate = [
        home.querySelector("h1"),
        home.querySelector("h2"),
        document.getElementById("home-subtitle"),
        document.getElementById("scroll-p"),
    ];
    // Hacer visible #chapter-p y activar movimiento

    setTimeout(() => {
        chapterP.style.opacity = "1";
    }, 1000);

    setTimeout(() => {
        chapterP.classList.add("move-to-top");

        // Detectar fin de la transición de movimiento
        chapterP.addEventListener("transitionend", (event) => {
            if (event.propertyName === "transform") {
                animateOtherElements();
            }
        });
    }, 2250);

    function animateOtherElements() {
        elementsToAnimate.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add("visible");
            }, index * 750);
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const about = document.getElementById("about");
    const elementsToAnimateAbout = [
        about.querySelector("h1"),
        about.querySelector("p"),
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Añadir un retraso inicial de 2 segundos
                    setTimeout(() => {
                        elementsToAnimateAbout.forEach((element, index) => {
                            setTimeout(() => {
                                element.classList.add("visible");
                            }, index * 750); // Retraso entre cada elemento
                        });
                    }, 2000); // Retraso inicial de 2 segundos

                    observer.unobserve(about); // Dejar de observar después de animar
                }
            });
        },
        { threshold: 0.3 } // Activar cuando el 30% del contenedor esté visible
    );

    observer.observe(about);
});

document.addEventListener("DOMContentLoaded", () => {
    const team = document.getElementById("team");
    const textElements = [
        team.querySelector("h1"),
        team.querySelector("h2"),
        team.querySelector("p"),
    ];
    const imageContainer = team.querySelector(".image-container");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animar los elementos de texto
                    setTimeout(() => {
                        textElements.forEach((element, index) => {
                            setTimeout(() => {
                                element.classList.add("visible");
                                // Verificar si es el último elemento
                                if (index === textElements.length - 1) {
                                    // Esperar a que todos los textos terminen su animación
                                    setTimeout(() => {
                                        imageContainer.classList.add("visible");
                                    }, 700); // Tiempo para que los textos terminen
                                }
                            }, index * 750); // Retraso entre cada elemento
                        });
                    }, 2000); // Retraso inicial antes de las animaciones

                    observer.unobserve(team); // Dejar de observar
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(team);
});


document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.getElementById("numbers");
    const divsToAnimate = Array.from(numbers.querySelectorAll("div")); // Seleccionar todos los divs

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Añadir un retraso inicial de 2 segundos
                    setTimeout(() => {
                        divsToAnimate.forEach((div, divIndex) => {
                            const elements = Array.from(div.children); // Obtener los elementos hijos (h1, p, etc.)
                            elements.forEach((element, elementIndex) => {
                                setTimeout(() => {
                                    element.classList.add("visible");
                                }, elementIndex * 750); // Retraso entre cada elemento del mismo div
                            });
                        });
                    }, 2000); // Retraso inicial de 2 segundos

                    observer.unobserve(numbers); // Dejar de observar después de animar
                }
            });
        },
        { threshold: 0.3 } // Activar cuando el 30% del contenedor esté visible
    );

    observer.observe(numbers);
});

document.addEventListener("DOMContentLoaded", () => {
    const features = document.getElementById("features");
    const elementsToAnimateAbout = Array.from(features.querySelectorAll("div")); // Seleccionar todos los divs

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Añadir un retraso inicial de 2 segundos
                    setTimeout(() => {
                        elementsToAnimateAbout.forEach((element, index) => {
                            setTimeout(() => {
                                element.classList.add("visible");
                            }, index * 750); // Retraso entre cada elemento
                        });
                    }, 2000); // Retraso inicial de 2 segundos

                    observer.unobserve(features); // Dejar de observar después de animar
                }
            });
        },
        { threshold: 0.3 } // Activar cuando el 30% del contenedor esté visible
    );

    observer.observe(features);
});