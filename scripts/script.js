//DOM Elements
const pokeId = document.getElementById('pokemon_id');
const pokeName = document.getElementById('pokemon_name');
const form = document.getElementById('pokedex_form');
const formInput = document.getElementById('pokedex_input');
const pokeImage = document.getElementById('pokemon_image');

const pokedex = async (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
  .then(res => res.json())
  .then(data => {
    pokeId.textContent = `#${data.id}`;
    pokeName.textContent = data.name;
    pokeImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
  })
  .then(err => console.log(err));
}

//Handlers
form.addEventListener('submit', () => {
  event.preventDefault();
  pokedex(formInput.value);
  formInput.Value = '';
});

pokedex('2');