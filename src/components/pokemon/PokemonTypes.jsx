import React from 'react'
import './PokemonTypes.css'

function PokemonTypes({pokemon}) {
  return (
    <div>
             <div className="pokemon-types">
        {pokemon.types.map((typeInfo, index) => (
          <span key={index} className={`type-badge ${typeInfo.type.name}`}>
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PokemonTypes