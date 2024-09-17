<?php
// Simula una base de datos con estados y municipios
$estados = array(
    1 => 'Barinas',
    2 => 'Distrito Capital',
    3 => 'Lara',
    4 => 'Táchira',
    5 => 'Zulia',
);

$municipios = array(
    1 => array('Alberto Arvelo Torrealba (Sabaneta)', 'Andrés Eloy Blanco (El Cantón)', 'Obispos (Obispos)'),
    2 => array('Libertador (Caracas)'),
    3 => array('Andrés Eloy Blanco (Sanare)', 'Iribarren (Barquisimeto)', 'Palavecino (Cabudare)'),
    4 => array('Bolívar (San Antonio del Táchira)', 'Fernández (San Rafael del Piñal)', 'Guásimos (Palmira)'),
    5 => array('Cabimas (Cabimas)', 'Colón (San Carlos del Zulia)', 'La Cañada de Urdaneta (Concepción)'),
);

if (isset($_GET['accion'])) {
    if ($_GET['accion'] == 'estados') {
        // Devuelve opciones de estados
        foreach ($estados as $id => $estado) {
            echo "<option value='$id'>$estado</option>";
        }
    } elseif ($_GET['accion'] == 'municipios' && isset($_GET['id_estado'])) {
        // Devuelve opciones de municipios basados en el estado seleccionado
        $idEstado = $_GET['id_estado'];
        foreach ($municipios[$idEstado] as $municipio) {
            echo "<option>$municipio</option>";
        }
    }
}
?>
