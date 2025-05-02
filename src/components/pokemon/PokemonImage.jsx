import React from 'react'
import './PokemonImage.css'

function PokemonImage({pokemon}) {
  return (
    <div>
        <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />
    </div>
  )
}

export default PokemonImage