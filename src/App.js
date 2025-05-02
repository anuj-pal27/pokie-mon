import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import SearchBar from "./components/filter/SearchBar";
import Filter from "./components/filter/Filter";
import { useMemo } from "react";
import Loader from "./components/common/Loader";
import Error from "./components/common/Error";
import ControlsWrapper from "./components/common/ControlsWrapper";
import PokemonList from "./components/pokemon/PokemonList";
import PokemonDetail from "./components/pokemon/PokemonDetail";
import Favorites from "./pages/Favorites";
import ErrorBoundary from "./utils/ErrorBoundary";
import Compare from "./pages/Compare";

import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await res.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemonList(pokemonDetails);
        setFilteredList(pokemonDetails);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch Pokémon.");
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  useEffect(() => {
    let list = pokemonList;

    if (searchTerm) {
      list = list.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      list = list.filter((pokemon) =>
        pokemon.types.some((typeInfo) => typeInfo.type.name === selectedType)
      );
    }

    setFilteredList(list);
  }, [searchTerm, selectedType, pokemonList]);
  
  const allTypes = useMemo(() => {
    return Array.from(
      new Set(
        pokemonList.flatMap((pokemon) =>
          pokemon.types.map((typeInfo) => typeInfo.type.name)
        )
      )
    );
  }, [pokemonList]);
  if (loading) return <Loader />;
  if (error) return <Error message={error} />;


  

  return (
    <ErrorBoundary>
    <Router>
    <div className="app-container">
      <Header />
      <Routes>
          <Route path="/favorites" element={<Favorites />} />  {/* Add route */}     
          <Route path="/compare" element={<Compare />} />
                                                                                                                                                                                                                                                                   
        <Route
          path="/"
          element={
            <>
              <ControlsWrapper>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Filter
                  types={allTypes}
                  selectedType={selectedType}
                  onTypeChange={(value) => setSelectedType(value)}
                />
              </ControlsWrapper>
              <PokemonList pokemons={filteredList} />
            </>
          }
        />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
    
      </Routes>
    </div>
  </Router>
  </ErrorBoundary >
  );
}

export default App;
