function mostrarContenedor(idMostrar) {
    document.getElementById('Mujeres').style.display = 'none';
    document.getElementById('Hombres').style.display = 'none';
    document.getElementById('Niños').style.display = 'none';
    document.getElementById('Accesorios').style.display = 'none';


    document.getElementById(idMostrar).style.display = 'block';
}