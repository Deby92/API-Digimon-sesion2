const URL_BASE = 'https://digimon-api.vercel.app/api/digimon';
const URL_CHARACTERS = URL_BASE + '/name';
let contenido;
let carta;

function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {
        contenido.innerHTML += ` <tr>
        <th scope="row">${temp.name}</ th>
        <td><img width="150px" height="150px" src="${temp.img}"</td>
        <td>${temp.level}</td>
    </tr> `;

    }
}

function tarjeta(data) {
    carta.innerHTML = "";

    for (let temp of data) {
        carta.innerHTML += ` 
          <div id="tarjSola" class="card mb-3 container ps-0 mt-3 bg-secondary bg-gradient rounded-1" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${temp.img}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title">"NOMBRE: ${temp.name}"</h4>
          <p class="card-text">ESPECIE: "${temp.level}"</p>
         </div>
      </div>
    </div>
  </div>
     `
    }; 

}

function mostrarImagenes() {
    let img = document.getElementById('galeria');
    document.getElementById('tabla_principal').style.display = 'none';
    document.getElementById('carta').style.display = 'none';
    document.getElementById('galeria').style.display = 'block';

    img.innerHTML = "";
    for (let temp of dataImagenes) {
        img.innerHTML += `
            <div id="card" class="card">
            <img src="${temp.img}" class="card-img-top" alt="imagen ${temp.name}"></img>
            <div class="card-body">
                <h6 class="card-title">${temp.name}</h6>
                <p class="card-text">${temp.level}</p>
            </div>
            </div>
`
    };
}

function mostrarNiveles() {
    let img = document.getElementById('galeria');
    document.getElementById('tabla_principal').style.display = 'none';
    document.getElementById('carta').style.display = 'none';
    document.getElementById('galeria').style.display = 'block';

    img.innerHTML = "";
    for (let temp of dataImagenes) {
        img.innerHTML += `
            <div id="card" class="card">
            <img src="${temp.img}" class="card-img-top" alt="imagen ${temp.name}"></img>
            <div class="card-body">
                <h6 class="card-title">${temp.name}</h6>
                <p class="card-text">${temp.level}</p>
            </div>
            </div>
`
    };
}

function capturaDato() {
    let nombrePersonaje = document.getElementById('dato').value;
    nombrePersonaje = nombrePersonaje.toLowerCase();
    document.getElementById('tabla_principal').style.display = 'none';
    document.getElementById('galeria').style.display = 'none';
    document.getElementById('carta').style.display = 'block';

    fetch("https://digimon-api.vercel.app/api/digimon/name/" + nombrePersonaje)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            tarjeta(datos);
        });
}

$(document).ready(function () {
    contenido = document.getElementById('contenido');
    carta = document.getElementById('carta');

    fetch(URL_BASE)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            tabla(datos);
            dataImagenes = datos;
        });

});