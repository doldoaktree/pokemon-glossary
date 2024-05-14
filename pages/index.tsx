import { Box, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MediaCard from "../components/mediacard";
import PrimarySearchAppBar from "../components/primary-search-app-bar";

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
      <Container maxWidth='lg' sx={{bgcolor: "skyblue"}}>
        <PrimarySearchAppBar />
        <Typography variant="h3" sx={{
          paddingTop: '70px', 
          paddingBottom: '10px', 
          alignContent: 'center',
          display: 'flex',
          justifyContent: 'center'
          }}> Pokemon</Typography>
        <Box
          sx={{
            bgcolor: "skyblue",
            height: "100vh",
            display: "flex",
            flexWrap: "wrap",
            fontWeight: "bold",
            justifyContent: "space-evenly",
            rowGap: '20px'
          }}
        >
          {allPokemons.map((pokemon, index) => (
            <MediaCard {...pokemon} key={index} />
          ))}
        </Box>
        <Link href="/dashboard">← Dashboard</Link>
      </Container>
    </Box>
  );
}
export default App;
