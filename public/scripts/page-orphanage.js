const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
} /* essa variável irá travar as formas de dar zoom do mapa*/

//Criando Mapa
const map = L.map('mapid', options).setView([-29.8191791,-51.1403251], 15);

//Criando e add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//Criando Icon
const icon = L.icon({ 
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Criando e add marcador
L.marker([-29.8191791,-51.1403251],{icon: icon}).addTo(map)

// Galeria de Imagem

function selectImage(event) {
    const button = event.currentTarget;

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass)
    
    function removeActiveClass(button) {
        button.classList.remove("active");
    }

    // Selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    // atualizar o container de imagem
    imageContainer.src = image.src;

    //adicionar a classe .active para este botão
    button.classList.add('active');
}