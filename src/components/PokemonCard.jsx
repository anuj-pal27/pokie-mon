const PokemonCard = ({ pokemon }) => (
    <div className="pokemon-card">
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>{pokemon.name} (#{pokemon.id}</h3>
        <p>{pokemon.types.join(", ")}</p>
    </div>
)
export default PokemonCard;