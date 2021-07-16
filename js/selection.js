//puts value of cookie in variable
var pokemonValue = Cookies.get('pokemonName');

//Creates h1 element 
var pokemonElement = document.createElement('h1');

//Checks that there is a cookie set and handles undefined
if (pokemonValue != undefined) {
    //Adds cookie value to h1 element innerText
    pokemonElement.innerText = pokemonValue;
} else {
    //if cookie value undefined then: 
    pokemonElement.innerText = "Click button below to make a selection"
    pokemonElement.style.fontSize = "3em";
}

//Appends new element to parent div
document.getElementById('userSelection').append(pokemonElement);

//Clears the cookie
function clearCookies() {
    Cookies.remove('pokemonName');
}

//Redirects back to home
function redirectHome() {
    window.location.href = "index.html"; 
}


//Not required, but extra for practice. Adds image of selected pokemon
var currentPokemon;

if (pokemonValue == "Moltres") {
    currentPokemon = "https://static.fandomspot.com/images/04/14175/13-moltres-pokemon-anime-screenshot.jpg";
} else if (pokemonValue == "Articuno") {
    currentPokemon = "https://img.pokemondb.net/artwork/large/articuno.jpg"
} else if (pokemonValue == "Zapdos"){
    currentPokemon = "https://imgix.bustle.com/mic/ek33kyri6qhwwwwpuy3nf0hvdg4objqh4jd5b7gnqse20dn626vr8y51r1yjvy4p.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format%2Ccompress";
} else {
    currentPokemon = undefined;
}

//Does not create element or append image if no selection is made
if (currentPokemon != undefined) {
    var pokemonImg = document.createElement('img');
    pokemonImg.setAttribute('src', currentPokemon);
    
    document.getElementById('userSelection').append(pokemonImg);
}
