import { useEffect, useState } from "react";
import MediaCard from "../components/mediacard";
import { Box, Container, Link, Stack } from "@mui/material";
import PrimarySearchAppBar from "../components/search";

type PokemonHint = {
  name: string;
  url: string;
};

function App() {
  const [allPokemons, setAllPokemons] = useState<PokemonHint[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const responseData = await response.json();
      return responseData;
    };
    fetchData().then((data) => {
      setAllPokemons(data.results);
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "#D4D4D4" }}>
      <Stack sx={{ bgcolor: "yellow" }}>what is in here?</Stack>
      <PrimarySearchAppBar />
      <Container sx={{ bgcolor: "skyblue" }}>
        <h1>Pokemon</h1>
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
          {allPokemons.map((pokemon, index) => (
            <MediaCard {...pokemon} key={index}/>
          ))}
          <Link href="/dashboard">← Dashboard</Link>
        </Box>
      </Container>
    </Box>
  );
}
export default App;
