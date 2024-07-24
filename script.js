document.addEventListener('DOMContentLoaded', function () {
    function actualizarReloj() {
        let ahora = new Date();

        // Obtener horas, minutos y segundos
        let horas = ahora.getHours();
        let minutos = ahora.getMinutes();
        let segundos = ahora.getSeconds();

        // Calcular ángulos en grados
        let anguloHoras = (horas % 12) * 30 + minutos / 2; // 30 grados por hora + ajuste por minutos
        let anguloMinutos = minutos * 6 + segundos / 10; // 6 grados por minuto + ajuste por segundos
        let anguloSegundos = segundos * 6; // 6 grados por segundo

        // Establecer estilos CSS usando variables personalizadas
        document.documentElement.style.setProperty('--hours', anguloHoras + 'deg');
        document.documentElement.style.setProperty('--minutes', anguloMinutos + 'deg');
        document.documentElement.style.setProperty('--seconds', anguloSegundos + 'deg');
    }

    // Actualizar el reloj cada segundo
    setInterval(actualizarReloj, 1000);

    // Llamar a actualizarReloj() al cargar la página para establecer el reloj inicialmente
    actualizarReloj();
});
