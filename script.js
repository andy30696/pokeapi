document.addEventListener('DOMContentLoaded', function(){

const buscador = document.getElementById("buscador");
const resultado = document.getElementById("resultado")
const btn = document.getElementById("btn")


btn.addEventListener("click", () =>{
    
    const storedValue = buscador.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${storedValue}`
        
        fetch(url)
        .then(response => response.json()
        )
        .then(data => {
            console.log(data)
            showPokemon(data)
            
        })
        .catch(error => console.error('Error al obtener información del Pokemón:', error));
    })
        
    function showPokemon(data) {
        resultado.innerHTML = `
          <div class="col-12 col-xl-4 col-md-4 col-sm-6">
            <div class="card">
                  <img class="card-img-top" width="200" src="${data.sprites.front_default}"alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text">
                  <br> Nombre: ${data.name} <br>
                  Tipo: ${data.types[0].type.name}<br>
                  Habilidades: ${data.abilities.map(ability => ability.ability.name).join(", ")}
                </p>
                <hr>
              </div>
            </div>
          </div>
        `;
      }
    });

      /*
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">
              Nombre: ${data.name}<br>
              Tipo: ${data.types[0].type.name}<br>
              Habilidades: ${data.abilities.map(ability => ability.ability.name).join(", ")}
            </p>
            <hr>
          </div>
        </div>
      </div>
    `;
  }
});
```
      */