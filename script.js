/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* =========================
   TRÁILER
========================= */

function openTrailer() {

    const modal = document.getElementById("trailerModal");

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeTrailer() {

    const modal = document.getElementById("trailerModal");

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


/* =========================
   CERRAR MODAL
========================= */

document.getElementById("trailerModal").addEventListener("click", function(event) {

    if (event.target === this) {

        closeTrailer();

    }

});


/* =========================
   NOTIFICACIÓN
========================= */

function showNotification(message) {

    const notification =
        document.getElementById("notification");

    const text =
        document.getElementById("notificationText");

    text.textContent = message;

    notification.classList.add("show");

    setTimeout(() => {

        notification.classList.remove("show");

    }, 4000);
}


/* =========================
   INICIAR MISIÓN
========================= */

function startMission() {

    showNotification(
        "MISIÓN D9 INICIADA — ESPERANDO SEGUNDO OPERADOR..."
    );

    setTimeout(() => {

        showNotification(
            "OPERADOR BRAVO CONECTADO — PREPÁRENSE PARA EL DESPLIEGUE."
        );

    }, 2500);

}


/* =========================
   EXTRACCIÓN
========================= */

function showEnding() {

    showNotification(
        "SEÑAL ENVIADA — HELICÓPTERO DE EXTRACCIÓN EN CAMINO."
    );

    setTimeout(() => {

        showNotification(
            "ADVERTENCIA: LA ZONA AÚN NO ES SEGURA."
        );

    }, 3000);

}


/* =========================
   EFECTO DE TEXTO
========================= */

const classifiedTexts = document.querySelectorAll(".classified");

classifiedTexts.forEach(element => {

    element.addEventListener("mouseenter", () => {

        element.style.textShadow =
            "0 0 10px rgba(255,0,0,0.7)";

    });

    element.addEventListener("mouseleave", () => {

        element.style.textShadow = "none";

    });

});


/* =========================
   LOG DE CARGA
========================= */

console.log(
`
=========================================
        DISTRITO 9 // SYSTEM
=========================================

STATUS: ONLINE
QUARANTINE: ACTIVE
INFECTED: UNKNOWN
OPERATORS: 2
HORDE COUNT: 3
BOSS: PATIENT ZERO
EXTRACTION: LOCKED

=========================================
`
);