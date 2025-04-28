import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
        const pokemonData = await Promise.all(
          res.data.results.map(async (pokemon) => {
            const poke = await axios.get(pokemon.url);
            return {
              id: poke.data.id,
              name: poke.data.name,
              image: poke.data.sprites.front_default,
              types: poke.data.types.map((type) => type.type.name),
            };
          })
        );
        setPokemons(pokemonData);
      } catch (err) {
        setError("Failed to fetch Pokémon data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading, error };
};

export default useFetchPokemon;
