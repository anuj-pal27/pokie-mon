import { useNavigate } from "react-router-dom";

const RandomPokemon = ({ pokemon }) => {
  const navigate = useNavigate();

  const goToCompare = () => {
    navigate(`/compare?pokemon1=${pokemon.name}`);
  };

  return (
    <div>
      {/* Your random Pokémon display */}
      <button onClick={goToCompare} className="compare-button">
        Compare This Pokémon
      </button>
    </div>
  );
};
