document.addEventListener("DOMContentLoaded", function() {
    // Suponiendo que tienes una matriz de datos proporcionada por tu programa Python
    const pronosticosData = [
        ["Usuario1", "3-1", 10, "Fecha1", "EquipoLocal1", "EquipoVisitante1"],
        ["Usuario2", "2-0", 5, "Fecha2", "EquipoLocal2", "EquipoVisitante2"],
        ['Almeria - Alaves', 'R.Sociedad - Rayo', 'Palmas - R.Madrid', 'Barça - Villareal', 'Mallorca - Betis', 'Celta - Girona', 'Cadiz - At.Bilbao', 'Sevilla - Osasuna', 'At.Madrid - Valencia', 'Getafe - Granada']// Más datos aquí...
    ];

    const mainContent = document.getElementById("main-content");

    // Función para renderizar la tabla de pronósticos y puntuaciones
    function renderTablaPronosticos(pronosticosData) {
        const table = document.createElement("table");
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Partidos</th>
                    <th>Cadiz Betis</th>
                    <th>A - b</th>
                    <th>C - D</th>
                    <th>E - F</th>
                    <th>G - H</th>
                </tr>
                <tr>
                    <th>Nombres</th>
                    <th>Pronóstico </th>
                    <th>Puntuación</th>
                    <th>Fecha</th>
                    <th>Equipo Local</th>
                    <th>Equipo Visitante</th>
                </tr>
            </thead>
            <tbody>
                ${pronosticosData.map((pronostico) => `
                    <tr>
                        <td>${pronostico[0]}</td>
                        <td>${pronostico[1]}</td>
                        <td>${pronostico[2]}</td>
                        <td>${pronostico[3]}</td>
                        <td>${pronostico[4]}</td>
                        <td>${pronostico[5]}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        mainContent.appendChild(table);
    }

    // Llamar a la función para renderizar la tabla al cargar la página
    renderTablaPronosticos(pronosticosData);
});