/* Carousel */
document.addEventListener("DOMContentLoaded", () => {
  const retailModules = [
    {
      title: "Gestión de Ventas",
      description:
        "Desde la orden hasta la facturación, controla el ciclo completo de ventas con herramientas avanzadas. Administra precios, descuentos, clientes y facturación electrónica de manera eficiente.",
      image: "./assets/sales-management.png",
    },
    {
      title: "Gestión de Compras y Almacén",
      description:
        "Registra compras, controla el stock en tiempo real y optimiza la rotación de productos. Integra tu inventario con sistemas ERP para una gestión centralizada.",
      image: "./assets/purchases.png",
    },
    {
      title: "Gestión de Cobros, Pagos y Caja",
      description:
        "Administra múltiples métodos de pago, incluyendo tarjetas de crédito y ventas a crédito. Controla el efectivo, realiza cortes de caja y obtén reportes financieros en tiempo real.",
      image: "./assets/payments.png",
    },
    {
      title: "Seguridad y Gestión de Usuarios",
      description:
        "Configura permisos avanzados para usuarios y supervisa todas las transacciones con auditoría detallada. Monitorea accesos en tiempo real para mayor seguridad.",
      image: "./assets/user.png",
    },
    {
      title: "Interfaz Moderna y Adaptable",
      description:
        "Accede a la plataforma desde cualquier dispositivo con una interfaz táctil intuitiva. Configura productos y procesos en una sola pantalla para agilizar la operación.",
      image: "./assets/responsive.png",
    },
    {
      title: "Flexibilidad y Personalización",
      description:
        "Adapta flujos operativos, crea ofertas personalizadas y automatiza envíos de correos a clientes. Diseñado para ajustarse a las necesidades de cualquier negocio.",
      image: "./assets/responsive.png",
    },
  ];

  let currentIndex = 0;

  const titleElement = document.getElementById("module-title");
  const descriptionElement = document.getElementById("module-description");
  const imageElement = document.getElementById("module-image");

  document.getElementById("next-btn").addEventListener("click", () => changeSlide(1));
  document.getElementById("prev-btn").addEventListener("click", () => changeSlide(-1));

  function changeSlide(direction = 1) {
    currentIndex = (currentIndex + direction + retailModules.length) % retailModules.length;

    gsap.to([titleElement, descriptionElement, imageElement], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        titleElement.textContent = retailModules[currentIndex].title;
        descriptionElement.textContent = retailModules[currentIndex].description;
        imageElement.src = retailModules[currentIndex].image;

        gsap.to([titleElement, descriptionElement, imageElement], {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      }
    });
  }

  // Cambio automático cada 5 segundos
  setInterval(() => changeSlide(1), 5000);
});
