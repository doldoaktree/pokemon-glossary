import { useEffect, useState } from "react";

export default function PokemonDetailsPage() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((body) => setDetails(body));
  }, []);
  return (
    <div>{JSON.stringify(details)}</div>
    // <React.Fragment>
    //   Pokemon details
    //   <h1>{cries.latest}</h1>
    // </React.Fragment>
  );
}
// export default function PokemonHandler({
//   pokemonData,
// }: {
//   pokemonData: ResponseData;
// }) {
//   console.log(pokemonData);

//   return <div>{pokemonData.forms[0].name}</div>;
// }

// export async function GetServerSideProps() {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
//   const data = response.json;
//   console.log(data)
//   return {
//     props:{pokemonData:data}
//   }
// }
