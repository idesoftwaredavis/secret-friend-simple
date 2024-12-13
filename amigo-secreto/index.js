//DOM
const button = document.getElementById("chooseButton");
const result = document.getElementById("result");
const img = document.createElement("img");
const imagenContainer = document.getElementById("imagen-container");

// Family
const participantes = [
    { nombre: "Davis", "avatar": "assets/img/davis.png" },
    { nombre: "Cony", "avatar": "assets/img/cony.png" },
    { nombre: "Tomas", "avatar": "assets/img/tomas.png" },
    { nombre: "Diego", "avatar": "assets/img/diego.png" },
    { nombre: "Kevin", "avatar": "assets/img/kevin.png" },
    { nombre: "Matias", "avatar": "assets/img/matias.png" },
    { nombre: "Giselle", "avatar": "assets/img/giselle.png" },
    { nombre: "Naza", "avatar": "assets/img/naza.png" },
    { nombre: "Valeska", "avatar": "assets/img/valeska.png" },
    { nombre: "Victor", "avatar": "assets/img/victor.png" },
]

// Función para elegir un amigo secreto
const chooseSecretFriend = () => {
    // Elegir random avatar
    const randomIndex = Math.floor(Math.random() * participantes.length);
    const chosenFriend = participantes.splice(randomIndex, 1)[0]

    // Parsear resultado
    result.textContent = `Tu amigo secreto es: ${chosenFriend.nombre}`;
    img.src=`${chosenFriend.avatar}`;
    img.width = "300";
    img.classList.add('img-fluid');

    imagenContainer.append(img);
    // Deshabilitar el botón una vez seleccionado
    button.disabled = true;
}

// Eventos
button.addEventListener("click", chooseSecretFriend);


