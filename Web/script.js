const mensaje = document.getElementById("mensaje");
const hora = new Date().getHours();

if (hora < 12) {
  mensaje.textContent = "Buenos días";
} else if (hora < 20) {
  mensaje.textContent = "Buenas tardes";
} else {
  mensaje.textContent = "Buenas noches";
}

const botonModo = document.getElementById("modoBtn");

botonModo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const lat = 37.8882;
const lng = -4.7794;

const map = L.map('mapa').setView([lat, lng], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([lat, lng])
  .addTo(map)
  .bindPopup('IES Gran Capitán')
  .openPopup();