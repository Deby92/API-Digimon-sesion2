const URL_BASE = 'https://rickandmortyapi.com/api';
const URL_CHARACTERS = URL_BASE + '/character';
let contenido;
let carta;

function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {
        contenido.innerHTML += ` <tr>
        <th scope="row">${temp.name}</ th>
        <td><img width="100px" height="100px" src="${temp.image}"</td>
        <td>${temp.species}</td>
    </tr> `;
        if (temp.id == 40) {
            break
        }

    }
}

function tarjeta(data) {
    carta.innerHTML = "";

    for (let temp of data) {
        carta.innerHTML += ` 
          <div id="tarjSola" class="card mb-3 container ps-0" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${temp.image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">"NOMBRE: ${temp.name}"</h5>
          <p class="card-text">ESPECIE: "${temp.species}"</p>
         </div>
      </div>
    </div>
  </div>
     `
    }

}

function mostrarImagenes() {
    let img = document.getElementById('galeria');
    document.getElementById('tabla_principal').style.display = 'none';
    document.getElementById('carta').style.display = 'none';
    document.getElementById('galeria').style.display = 'block';

    img.innerHTML = "";
    for (let temp of dataImagenes.results) {
        img.innerHTML += `
            <div id="card" class="card">
            <img src="${temp.image}" class="card-img-top" alt="imagen ${temp.name}"></img>
            <div class="card-body">
                <h6 class="card-title">${temp.name}</h6>
                <p class="card-text">${temp.species}</p>
            </div>
            </div>
`
    }
}

function capturaDato() {
    let nombrePersonaje = document.getElementById('dato').value;
    nombrePersonaje = nombrePersonaje.toLowerCase();
    document.getElementById('tabla_principal').style.display = 'none';
    document.getElementById('galeria').style.display = 'none';
    document.getElementById('carta').style.display = 'block';

    fetch(URL_CHARACTERS + '?name=' + nombrePersonaje)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            tarjeta(datos.results);
        });
}

$(document).ready(function () {
    contenido = document.getElementById('contenido');
    carta= document.getElementById('carta');

    fetch(URL_CHARACTERS)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            tabla(datos.results);
            dataImagenes = datos;
        });

});