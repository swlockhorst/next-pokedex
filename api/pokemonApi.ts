import { Pokedex } from "pokeapi-js-wrapper";

const P = new Pokedex();

export const fetchPokemonByName = async (name) => {
  return P.getPokemonByName(name);
};
