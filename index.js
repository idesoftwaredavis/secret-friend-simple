//DOM
const button = document.getElementById("chooseButton");
const result = document.getElementById("result");
const musicaContainer = document.getElementById("musica");
const imagenContainer = document.getElementById("imagen-container");

const img = document.createElement("img");
const audio = document.createElement("audio");

let count = 0;

// Family
const participantes = [
  { nombre: "Davis", avatar: "assets/img/davis.png" },
  { nombre: "Cony", avatar: "assets/img/cony.png" },
  { nombre: "Tomas", avatar: "assets/img/tomas.png" },
  { nombre: "Diego", avatar: "assets/img/diego.png" },
  { nombre: "Kevin", avatar: "assets/img/kevin.png" },
  { nombre: "Matias", avatar: "assets/img/matias.png" },
  { nombre: "Giselle", avatar: "assets/img/giselle.png" },
  { nombre: "Naza", avatar: "assets/img/naza.png" },
  { nombre: "Valeska", avatar: "assets/img/valeska.png" },
  { nombre: "Victor", avatar: "assets/img/victor.png" },
];

const cancionesChristmas = [
  "assets/mp3/christmasV1.mp3",
  "assets/mp3/christmasV2.mp3",
  "assets/mp3/christmasV3.mp3",
  "assets/mp3/christmasV4.mp3",
  "assets/mp3/christmasV5.mp3",
  "assets/mp3/christmasV6.mp3",
];

// Función para elegir un amigo secreto
const chooseSecretFriend = () => {
  // Elegir random avatar
  const randomAvatar = Math.floor(Math.random() * participantes.length);
  const randomMusica = Math.floor(Math.random() * cancionesChristmas.length);

  const chosenFriend = participantes.splice(randomAvatar, 1)[0];
  const chosenMusica = cancionesChristmas.splice(randomMusica, 1)[0];

  // Parsear resultado
  result.textContent = `Tu amigo secreto es: ${chosenFriend.nombre}`;
  img.src = `${chosenFriend.avatar}`;
  img.width = "300";
  img.classList.add("img-fluid");

  imagenContainer.append(img);
  // Deshabilitar el botón una vez seleccionado
  button.disabled = true;

  audio.src = `${chosenMusica}`;
  musicaContainer.append(audio);
  audio.playbackRate += 0.5;
  audio.play();
};

// Eventos
button.addEventListener("click", chooseSecretFriend);
