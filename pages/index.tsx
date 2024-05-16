import { Box, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MediaCard from "../components/mediacard";
import PrimarySearchAppBar from "../components/primary-search-app-bar";
import { Head } from "next/document";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

type PokemonHint = {
  name: string;
  url: string;
};

function Home() {
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

      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "skyblue",

          height: "100%",
        }}
      >
        <PrimarySearchAppBar />
        <Typography
          variant="h3"
          sx={{
            paddingBottom: "10px",
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Pokemon
        </Typography>
        <Box
          sx={{
            bgcolor: "skyblue",
            display: "flex",
            flexWrap: "wrap",
            fontWeight: "bold",
            justifyContent: "space-between",
            rowGap: "20px",
            overflow: "scroll",
            height: "calc(100vh - 140px)",
          }}
        >
          {allPokemons.map((pokemon, index) => (
            <MediaCard {...pokemon} key={index} />
          ))}
        </Box>
        <Link href="/dashboard">← Dashboard</Link>
      </Container>
  
  );
}
export default Home;
