import React, { useState, useEffect } from "react";
import PokemonImage from "./PokemonImage";
import PokemonTypes from "./PokemonTypes";
import { useNavigate } from "react-router-dom";

import "../pokemon/PokemonCard.css";

function PokemonCard({ pokemon }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  // Check if the pokemon is already a favorite in localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavoritePokemon = favorites.some((fav) => fav.id === pokemon.id);
    setIsFavorite(isFavoritePokemon);
  }, [pokemon.id]);

  // Toggle favorite status and update localStorage
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav) => fav.id !== pokemon.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      favorites.push(pokemon);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite); // Toggle the favorite state
  };

  // Navigate to the Pokémon detail page
  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div className="pokemon-card" onClick={handleCardClick}>
      <PokemonImage pokemon={pokemon} />
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <p className="pokemon-id">#{pokemon.id}</p>
      <PokemonTypes pokemon={pokemon} />
      <div className="favorite-icon" onClick={(e) => {
        e.stopPropagation(); // Prevent card click navigation
        toggleFavorite();
      }}>
        {isFavorite ? "❤️" : "🤍"}
      </div>
    </div>
  );
}

export default PokemonCard;
