import { useEffect, useState } from "react";

export interface PageItem {
  name: string;
  url: string;
}

interface ResponseData {
  results: [];
}

type Props = { items: PageItem[] };

function MapListOfChar(props: Props) {
  const [allPokemons, setAllPokemons] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const responseData: ResponseData = await response.json();
      setAllPokemons(responseData.results);
    };
    fetchData();
  }, []);

  return (
    <>
    <h1>{JSON.stringify(allPokemons)}</h1>
    </>
  );
  const listOfCharacters = allPokemons.map((value, index) => {
    const { name, url } = value;
    return (
      <>
        <div key={index}>
          {/* <InteractiveList /> */}
          {/* <MediaCard name={name} url={url} /> */}
        </div>
      </>
    );
  });

  return listOfCharacters;
  // useEffect(() => {
  //   if (props.items == null) return;
  //   Promise.all(
  //     props.items.map((x) => fetch(x.url).then((y) => y.json()))
  //   ).then((pokemons) => setAllPokemons(pokemons));
  // }, [props.items]);

  //  return <div>{JSON.stringify(allPokemons.results)}</div>;
  // return <div>{JSON.stringify(allPokemons)}</div>;
  // const [details, setDetails] =  useState({});

  // useEffect(() => {
  //   if (props.items == null) return;
  //   Promise.all(props.items.map(x => fetch(x.url).then(y=>y.json())))
  //     .then(allDetails => setDetails(allDetails))
  // },[props.items]);

  // const { items } = props;
  // return <div>{JSON.stringify(details)}</div>
}