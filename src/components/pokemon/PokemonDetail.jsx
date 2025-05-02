import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PokemonDetail.css';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);

        const speciesRes = await fetch(data.species.url);
        const speciesData = await speciesRes.json();

        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();

        const chain = [];
        let current = evoData.chain;
        while (current) {
          chain.push(current.species.name);
          current = current.evolves_to[0];
        }

        setEvolutionChain(chain);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchPokemonDetails();
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;
  if (!pokemon) return <div className="error">Pokémon not found</div>;

  return (
    <div className="pokemon-detail-container">
      <Link to={`/compare?pokemon1=${pokemon.name}`}>
  <button className="compare-button">⚔️ Compare</button>
</Link>

      <h2>🔍 Pokémon Details</h2>
      <Link to="/" className="back-button">← Back to List</Link>

      <div className="pokemon-detail-card">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className="pokemon-detail-img"
        />
        <h1>{pokemon.name} <span className="pokemon-id">#{pokemon.id}</span></h1>

        <div className="section">
          <h2>Stats</h2>
          <ul className="stats-list">
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                <span>{stat.stat.name}</span>
                <div className="stat-bar">
                  <div
                    className="stat-fill"
                    style={{ width: `${stat.base_stat / 2}%` }}
                  >
                    {stat.base_stat}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Abilities</h2>
          <ul className="abilities">
            {pokemon.abilities.map((a) => (
              <li key={a.ability.name}>{a.ability.name}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Moves</h2>
          <ul className="moves">
            {pokemon.moves.slice(0, 10).map((move) => (
              <li key={move.move.name}>{move.move.name}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Evolution Chain</h2>
          <ul className="evolution">
            {evolutionChain.length > 0 ? (
              evolutionChain.map((name, index) => (
                <li key={index}>{name}</li>
              ))
            ) : (
              <li>Evolution chain not available.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
