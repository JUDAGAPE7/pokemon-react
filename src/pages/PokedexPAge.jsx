import { useSelector } from "react-redux";
import useFecth from "../hooks/useFecth";
import PokeCard from "../components/PokedexPAge/PokeCard";
import { useEffect, useRef, useState } from "react";
import SelectedType from "../components/PokedexPAge/SelectedType";
import "./PokedexPAge.css";
import Pagination from "../components/PokedexPAge/Pagination";


const PokedexPAge = () => {
  const [searchedName, setSearchedName] = useState("");

  const [pokemons, getPokemons, getTypePokemon] = useFecth();

  const [typeSelected, setTypeSelected] = useState("allPokemons");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeSelected === "allPokemons") {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      getPokemons(url);
    } else {
      // Peticion de los Pokemmons por tipo
      getTypePokemon(typeSelected);
    }
  }, [typeSelected]);

  const trainer = useSelector((states) => states.trainer);

  const inputName = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchedName(inputName.current.value.trim().toLowerCase());
  };

  const callbackFilter = (poke) => {
    const filterName = poke.name.includes(searchedName);
    return filterName;
  };

  

  const pokemonesPerPage = 9;
  const startIndex = (currentPage - 1) * pokemonesPerPage;
  const endIndex = startIndex + pokemonesPerPage;
  const pokemonesToShow = pokemons?.results.slice(startIndex, endIndex);

 

  return (
    <div className="poke__cards">
      <img className="titles" src='src/images/topheader.png' alt="" />
      <p className="welcome ">Welcome {trainer}, you will find your favorite pokemon </p>
      
      <div className="form">

      <form className="form__one"  onSubmit={handleSearch}>
        <input ref={inputName} type="text" />
        <button> search </button>
      </form>

      <SelectedType setTypeSelected={setTypeSelected} />
      </div>

      <div className="card__container">
        {pokemons && pokemons.results.filter(callbackFilter).length == 0 ? (
          <h2> Not Pokemons were found</h2>
        ) : (
          pokemonesToShow
            ?.filter(callbackFilter)
            .map((poke) => <PokeCard key={poke.url} poke={poke} />)
        )}
      </div>

      {pokemons?.results.length > pokemonesPerPage && (
        <Pagination
          totalCards={pokemons?.results.length || 0}
          cardsPerPage={pokemonesPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default PokedexPAge;
