//Criando Mapa
const map = L.map('mapid').setView([-29.8191791,-51.1403251], 15);

//Criando e add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//Criando Icon
const icon = L.icon({ 
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// Criando e add marcador
map.on('click', (event) => { // () => arrow function de forma simplificada.
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat; //('[name=lat]').value=lat - seleciona o objeto input pela name e add lat como valor
    document.querySelector('[name=lng]').value = lng;

    // Remover ícone
    marker && map.removeLayer(marker);

    // Adiciona camada de ícone
    marker = L.marker([lat, lng], {icon}).addTo(map);
})

// Adicionar o campo de fotos
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images');

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // realizar o clone da última imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true); //-1 para encontrar a posição correta no array.

    // Verificar se o campo está vazio, se sim, n add ao container de imagens
    const input = newFieldContainer.children[0];
        
    if(input.value == "") {
        return;
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = "";

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = "";
        return;
    }

    //deletar o campo
    span.parentNode.remove();
}

// Selecionar o Sim ou Não
function toggleSelect(event) {

    // retirar a classe .active dos botões
    document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active')) // Se for apenas uma linha a arrow function não necessita de {}

    // colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active');

    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

    // verificar se sim ou não
    input.value = button.dataset.value;    
}