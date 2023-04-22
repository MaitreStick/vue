// import { owners } from "./data/heroes";
import superHeroes from "../data/heroes";

// getHeroById (id)
// funciones de Flecha
// find

export const getHeroById = (idNumber) => 
superHeroes.find( (heroe) => heroe.id === idNumber )




// getHeroesByOwner 'DC', 'Marvel'
export const getHeroesByOwner = ( ownerName ) =>
superHeroes.filter( (casa) => casa.owner === ownerName )


// import { getHeroById } from "./bases/08-imp-exp";
// import { getHeroesByOwner } from "./bases/08-imp-exp";


// console.log( getHeroById(2) ) // Spiderman

// console.log(getHeroesByOwner('Marvel')); // []