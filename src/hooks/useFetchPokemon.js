import { useEffect, useState } from "react";
import axios from "axios";
import pLimit from "p-limit"; // install with: npm install p-limit

const useFetchPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
        const results = res.data.results;

        // Limit concurrency to 10 simultaneous requests
        const limit = pLimit(10);
        const fetchDetails = results.map((pokemon) =>
          limit(async () => {
            const poke = await axios.get(pokemon.url);
            return {
              id: poke.data.id,
              name: poke.data.name,
              image: poke.data.sprites.front_default,
              types: poke.data.types.map((type) => type.type.name),
            };
          })
        );

        const pokemonData = await Promise.all(fetchDetails);
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
