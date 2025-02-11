
ScrollTrigger.create({
animation: gsap.from(".logo", {
    y: "50vh",
    scale: 5,
    yPercent: -50,
}),
scrub: true,
trigger: ".content",
start: "top bottom",
endTrigger: ".content",
end: "top center",
});

/* Scroll REveal */
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 500,
    delay: 0
})

ScrollReveal().reveal('.text-box');
ScrollReveal().reveal('.demo-phone');

/* Carousel */
document.addEventListener("DOMContentLoaded", () => {
  const retailModules = [
    {
      title: "Gestión de Ventas",
      description:
        "Desde la orden hasta la facturación, controla el ciclo completo de ventas con herramientas avanzadas. Administra precios, descuentos, clientes y facturación electrónica de manera eficiente.",
      video: "./assets/sales-management.mp4",
    },
    {
      title: "Gestión de Compras y Almacén",
      description:
        "Registra compras, controla el stock en tiempo real y optimiza la rotación de productos. Integra tu inventario con sistemas ERP para una gestión centralizada.",
      video: "./assets/purchases-inventory.mp4",
    },
    {
      title: "Gestión de Cobros, Pagos y Caja",
      description:
        "Administra múltiples métodos de pago, incluyendo tarjetas de crédito y ventas a crédito. Controla el efectivo, realiza cortes de caja y obtén reportes financieros en tiempo real.",
      video: "./assets/payments-cashflow.mp4",
    },
    {
      title: "Seguridad y Gestión de Usuarios",
      description:
        "Configura permisos avanzados para usuarios y supervisa todas las transacciones con auditoría detallada. Monitorea accesos en tiempo real para mayor seguridad.",
      video: "./assets/user-security.mp4",
    },
    {
      title: "Interfaz Moderna y Adaptable",
      description:
        "Accede a la plataforma desde cualquier dispositivo con una interfaz táctil intuitiva. Configura productos y procesos en una sola pantalla para agilizar la operación.",
      video: "./assets/responsive-interface.mp4",
    },
    {
      title: "Flexibilidad y Personalización",
      description:
        "Adapta flujos operativos, crea ofertas personalizadas y automatiza envíos de correos a clientes. Diseñado para ajustarse a las necesidades de cualquier negocio.",
      video: "./assets/customization.mp4",
    },
  ];

  let currentIndex = 0;

  const titleElement = document.getElementById("module-title");
  const descriptionElement = document.getElementById("module-description");
  const videoElement = document.getElementById("module-video");
  const videoSource = document.getElementById("video-source");

  document.getElementById("next-btn").addEventListener("click", () => changeSlide(1));
  document.getElementById("prev-btn").addEventListener("click", () => changeSlide(-1));

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + retailModules.length) % retailModules.length;

    gsap.to([titleElement, descriptionElement], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        titleElement.textContent = retailModules[currentIndex].title;
        descriptionElement.textContent = retailModules[currentIndex].description;

        gsap.to([titleElement, descriptionElement], {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      }
    });

    // Cambio de video con animación suave
    gsap.to(videoElement, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        videoSource.src = retailModules[currentIndex].video;
        videoElement.load(); // Recarga el video para aplicar el nuevo src

        gsap.to(videoElement, {
          opacity: 1,
          duration: 0.3,
        });
      }
    });
  }
});



/* contact */
document.getElementById("info-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Capturar los datos del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    // Simulación de envío
    console.log("Formulario enviado:", { name, email, phone, message });
  
    // Animación de confirmación
    gsap.to("#info-form", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        document.querySelector(".text-box").innerHTML = `
          <h2>¡Gracias por tu interés!</h2>
          <p>Hemos recibido tu solicitud y te contactaremos pronto.</p>
        `;
  
        gsap.to(".text-box", { opacity: 1, y: 0, duration: 0.5 });
      }
    });
  });
  