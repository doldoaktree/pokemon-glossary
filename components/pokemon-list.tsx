import { useEffect, useState } from "react";
import MediaCard from "./mediacard";

type PokemonHint = {
  name: string;
  url: string;
};

type Power = {
  selectedPower: string;
};

function PokemonList({ selectedPower }: Power) {
  const [allPokemons, setAllPokemons] = useState<PokemonHint[]>([]);
  const [filterPower, setFilterPower] = useState();

  const power = "pound";
  if (power) {
    useEffect(() => {
      const fetchData = async (power: string) => {
        const response = await fetch(`https://pokeapi.co/api/v2/move/${power}`);

        const responseData = await response.json();

        return responseData;
      };
      fetchData(power).then((data) => {
        setAllPokemons(data.learned_by_pokemon);
        console.log(allPokemons);
      });
    }, []);
  } else {
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
  }

  return (
    <>
      {allPokemons.map((pokemon, index) => (
        <MediaCard {...pokemon} key={index} />
      ))}
    </>
  );
}
export default PokemonList;
