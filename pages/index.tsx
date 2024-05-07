import { Box, Container, Link, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import PrimarySearchAppBar from "./components/search";
import MediaCard from "./components/mediacard";

export interface PageItem {
  name: string;
  url: string;
}

interface ResponseData {
  results:[]
}

type Props = { items: PageItem[]};


function MapChars(props: Props): any {
  const [allPokemons, setAllPokemons] = useState({} as ResponseData);
useEffect(()=>{

  const fetchData =  async()=>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const responseData = await response.json();
    setAllPokemons(responseData);
  }
  fetchData();
},[])
  // useEffect(() => {
  //   if (props.items == null) return;
  //   Promise.all(
  //     props.items.map((x) => fetch(x.url).then((y) => y.json()))
  //   ).then((pokemons) => setAllPokemons(pokemons));
  // }, [props.items]);

  console.log(allPokemons);
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

  const listOfCharacters = allPokemons.results ? (allPokemons.results).map((value, index) => {
    const { name, url } = value;
    return (
      <>
        <MediaCard key={index} name={name} url={url} id={0} forms={[]} />
      </>
    );
  }):[];

  return listOfCharacters;
}

function App() {
  const [pokemons, setPokemons] = useState({} as any);

  useEffect(() => {
    // if (pokemons.results == null) return;
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => response.json())
      .then((body) => setPokemons(body));
  }, []);

  return (
    <Box sx={{ bgcolor: "#D4D4D4" }}>
      <Stack sx={{ bgcolor: "yellow" }}>what is in here?</Stack>
      <PrimarySearchAppBar />
      <Container sx={{ bgcolor: "skyblue" }}>
        <h1>Pokemon</h1>
        <Link href="/api/hello">← Hello</Link>
        <Box
          sx={{
            bgcolor: "skyblue",
            height: "100vh",
            display: "flex",
            flexWrap: "wrap",
            fontWeight: "bold",
            justifyContent: "space-evenly",
          }}
        >
          <MapChars items={pokemons.results} />
          <Link href="/dashboard">← Dashboard</Link>
        </Box>
      </Container>
    </Box>
  );
}
export default App;
