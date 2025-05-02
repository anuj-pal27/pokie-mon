import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Compare.css';

function Compare() {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);
  const [pokemonName, setPokemonName] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchParams = new URLSearchParams(useLocation().search);
  const pokemon1Name = searchParams.get('pokemon1');

  useEffect(() => {
    // Fetch details for the first Pokemon from the URL params
    async function fetchPokemonDetails(name) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokemon1(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (pokemon1Name) {
      fetchPokemonDetails(pokemon1Name);
    }
  }, [pokemon1Name]);

  // Fetch suggestions based on input
  useEffect(() => {
    if (pokemonName.length > 0) {
      setLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
        .then((res) => res.json())
        .then((data) => {
          const filteredSuggestions = data.results.filter((pokemon) =>
            pokemon.name.includes(pokemonName.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
          setLoading(false);
        });
    } else {
      setSuggestions([]);
    }
  }, [pokemonName]);

  // Handle selecting a suggestion
  const handleSuggestionClick = (suggestion) => {
    setPokemonName(suggestion.name);
    setSuggestions([]);
  };

  // Handle comparing second Pokémon
  const handleCompare = async () => {
    if (pokemonName) {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => res.json());
      setPokemon2(data);
    }
  };

  return (
    <div className="compare-container">
      <Link to="/" className="back-button">← Back to List</Link>
      <h1>Compare Pokémon</h1>

      <div className="compare-form">
        <div className="pokemon-input">
          <label htmlFor="pokemon-name">Enter Pokémon to Compare:</label>
          <input
            type="text"
            id="pokemon-name"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
            placeholder="e.g., bulbasaur"
          />
          {loading && <p>Loading suggestions...</p>}
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion) => (
                <li key={suggestion.name} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          <button onClick={handleCompare}>Compare</button>
        </div>
      </div>

      <div className="comparison">
        <div className="pokemon-card">
          {pokemon1 && (
            <>
              <img
                src={pokemon1.sprites.other['official-artwork'].front_default}
                alt={pokemon1.name}
                className="pokemon-img"
              />
              <h2>{pokemon1.name} <span>#{pokemon1.id}</span></h2>
              <div className="stats">
                {pokemon1.stats.map((stat) => (
                  <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="vs">VS</div>

        <div className="pokemon-card">
          {pokemon2 && (
            <>
              <img
                src={pokemon2.sprites.other['official-artwork'].front_default}
                alt={pokemon2.name}
                className="pokemon-img"
              />
              <h2>{pokemon2.name} <span>#{pokemon2.id}</span></h2>
              <div className="stats">
                {pokemon2.stats.map((stat) => (
                  <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Compare;
