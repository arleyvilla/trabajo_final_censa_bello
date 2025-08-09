// 1. Mostrar alerta al cargar la página
function mostrarAlerta() {
    alert("¡Bienvenido/a a la página de Energías Limpias!");
}

// 2. Cambiar el color de fondo del cuerpo del documento
function cambiarFondo() {
    const colores = ['#e0f7fa', '#fce4ec', '#fff9c4', '#e8f5e9'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

// 3. Mostrar/Ocultar beneficios
function toggleBeneficios() {
    const lista = document.getElementById("lista-beneficios");
    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}

// 4. Mostrar fecha y hora actual en el pie de página
function mostrarFechaHora() {
    const ahora = new Date();
    const fechaHora = ahora.toLocaleString();
    document.getElementById("fecha-hora").innerText = `Fecha y hora actual: ${fechaHora}`;
}

// Ejecutar la función cada segundo
setInterval(mostrarFechaHora, 1000);
