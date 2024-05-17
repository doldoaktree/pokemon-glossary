import { useState, useEffect } from "react";
import MediaCard from "./mediacard";
import Layout from "./layout";

type PokemonHint = {
  name: string;
  url: string;
};

function PokemonList() {
  const [allPokemons, setAllPokemons] = useState<PokemonHint[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const responseData = await response.json();
      return responseData;
    };
    fetchData().then((data) => {
      setAllPokemons(data.results);
      console.log(allPokemons);
    });
  }, []);

  return (
    <>
      {allPokemons.map((pokemon, index) => (
        <MediaCard {...pokemon} key={index} />
      ))}
    </>
  );
}
export default PokemonList;
