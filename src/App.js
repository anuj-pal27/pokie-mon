import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Filter from './components/Filter.jsx';
import PokemonList from './components/PokemonList.jsx';
import SearchBar from './components/SearchBar.jsx';
import { useState } from 'react';
import useFetchPokemon from './hooks/useFetchPokemon.js';

function App() {
  const {pokemons,loading,error} = useFetchPokemon();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const allTypes = [...new Set(pokemons.flatMap((p)=>p.types))];

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesSearchTerm = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType ? pokemon.types.includes(selectedType) : true;
    return matchesSearchTerm && matchesType;
  });
  return (
    <div className="App">
      <Header/>
      <div className='controls'>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <Filter types={allTypes} selectedType={selectedType} onTypeChange={setSelectedType} />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </div>
  );
}

export default App;
