import React from 'react'
import PokemonGrid from './PokemonGrid'
import Pagination from '../../pages/Pagination'
import "./PokemonList.css"
import Sorting from '../layout/Sorting';
import TypeFilter from '../filter/TypeFilter';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PokemonList({pokemons}) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(10);
    const [sortOptions, setSortOptions] = React.useState("id");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const navigate = useNavigate();
    
    const totalPages = Math.ceil(pokemons.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;

    const filteredPokemons = pokemons.filter((pokemon) => {
      if (selectedTypes.length === 0) return true;
      const pokemonTypes = (pokemon.types || []).map((typeInfo) => typeInfo.type.name);
      return selectedTypes.every((type) => pokemonTypes.includes(type));
    });

    
const sortedPokemons = [...filteredPokemons].sort((a, b) => {
  if (sortOptions === "id") {
    return a.id - b.id;
  } else if (sortOptions === "name") {
    return a.name.localeCompare(b.name);
  }
  return 0;
});

const paginatedPokemons = sortedPokemons.slice(startIndex, startIndex + itemsPerPage);
    const allTypes = Array.from(
      new Set(
        (pokemons || []).flatMap((pokemon) =>
          (pokemon.types || []).map((typeInfo) => typeInfo.type.name)
        )
      )
    );
    
    const handleTypeChange = (type) => {
      setSelectedTypes((prev) =>
        prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
      );
    };
    const getRandomPokemon = () => {
      const id = Math.floor(Math.random() * 898) + 1; // Gen 1–8
      navigate(`/pokemon/${id}`);
    };
  return (
    <div>
         <button onClick={getRandomPokemon} className='getRandomPokemon'>🎲 Random Pokémon</button>
            <div className="favorites-button-container">
        <Link to="/favorites">
          <button className="favorites-button"> ⭐ Go to Favorites</button>
        </Link>
      </div>

      <TypeFilter
  allTypes={allTypes}
  selectedTypes={selectedTypes}
  onTypeChange={handleTypeChange}
/>

      <Sorting setSortOptions={setSortOptions} sortOptions={sortOptions}/>
        <div className='items-per-page'>
        <label>Items per page: </label>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1); // Reset to page 1
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
        <PokemonGrid pokemons={paginatedPokemons} />
        <Pagination  currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}/>
    </div>
  )
}

export default PokemonList 