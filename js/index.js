//Gets name of pokemon dependant on specific button click
//Sets cookie with name of pokemon
function getPokemonName(button) {
    Cookies.set('pokemonName', button.innerText);
}

//redirects to selection page
function redirect() {
    window.location.href = "selection.html"; 
}