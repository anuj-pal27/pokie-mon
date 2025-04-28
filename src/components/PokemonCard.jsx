import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <p className="pokemon-id">#{pokemon.id}</p>
      <div className="pokemon-types">
        {pokemon.types.map((typeInfo, index) => (
          <span key={index} className={`type-badge ${typeInfo.type.name}`}>
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
