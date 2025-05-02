import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import PokemonCard from "../components/pokemon/PokemonCard";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const goBack = () => {
    navigate(-1); // This replaces history.goBack() in react-router-dom v6
  };

  return (
<div className="favorites-container">
  <button className="back-button" onClick={goBack}>Go Back</button>
  <h1>Your Favorite Pokémon</h1>
  <div className="pokemon-list">
    {favorites.length === 0 ? (
      <div className="no-favorites">
        <p>😢 No favorite Pokémon found.</p>
        <p className="add-hint">Go catch some and mark them as favorites!</p>
      </div>
    ) : (
      favorites.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))
    )}
  </div>
</div>

  );
}

export default Favorites;
