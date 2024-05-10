window.addEventListener('load', function() {
    // Oculte a loading screen
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';

    // Exiba o conteúdo do site
    var content = document.getElementById('container');
    content.style.display = 'block';
});