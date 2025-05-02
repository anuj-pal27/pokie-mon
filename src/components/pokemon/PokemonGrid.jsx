import PokemonCard from "./PokemonCard";
import "./PokemonGrid.css"; 

const PokemonGrid = ({ pokemons}) => {
  if (pokemons.length === 0) {
    return <div className="no-results">No Pokémon found!</div>;
  }

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonGrid;
