import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await res.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemonList(pokemonDetails);
        setFilteredList(pokemonDetails);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch Pokémon.");
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  useEffect(() => {
    let list = pokemonList;

    if (searchTerm) {
      list = list.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      list = list.filter((pokemon) =>
        pokemon.types.some((typeInfo) => typeInfo.type.name === selectedType)
      );
    }

    setFilteredList(list);
  }, [searchTerm, selectedType, pokemonList]);

  if (loading) return <div className="loading">Loading Pokémon...</div>;
  if (error) return <div className="error">{error}</div>;
  const allTypes = Array.from(
    new Set(
      pokemonList.flatMap((pokemon) =>
        pokemon.types.map((typeInfo) => typeInfo.type.name)
      )
    )
  );
  return (
    <div className="app-container">
      <Header />
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter
  types={allTypes}
  selectedType={selectedType}
  onTypeChange={(value) => setSelectedType(value)}
/>

      </div>

      <div className="pokemon-grid">
        {filteredList.length > 0 ? (
          filteredList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <div className="no-results">No Pokémon found!</div>
        )}
      </div>
    </div>
  );
}

export default App;
