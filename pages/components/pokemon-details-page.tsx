import ResponseData from "../response-model/response-data";

export default function PokemonHandler({
  pokemonData,
}: {
  pokemonData: ResponseData;
}) {
  console.log(pokemonData);

  return <div>{pokemonData.forms[0].name}</div>;
}

export async function GetServerSideProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const data = response.json;
  console.log(data)
  return {
    props:{pokemonData:data}
  }
}
