/* Tipos de dados:
String ""  |  Number 01  |  Object {}  |  Boolean true or false  |  Array []  */

//Criando Mapa
const map = L.map('mapid').setView([-29.8191791,-51.1403251], 15);

//Criando e add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//Criando Icon
const icon = L.icon({ 
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Criando popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('ACAPASS <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

//Criando e add marcador
L.marker([-29.8191791,-51.1403251],{icon: icon}).addTo(map)
    .bindPopup(popup)