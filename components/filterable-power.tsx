import { Box, Container, Link, Typography } from "@mui/material";
import PrimarySearchAppBar from "./primary-search-app-bar";
import PokemonList from "./pokemon-list";
import { useState } from "react";

export default function FilterablePower() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "skyblue",
        height: "100%",
      }}
    >
      <PrimarySearchAppBar
        selectedValue={selectedValue}
        onSelectedValueChange={setSelectedValue}
      />
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
        <PokemonList selectedPower={selectedValue} />
      </Box>
      <Link href="/dashboard">← Dashboard</Link>
    </Container>
  );
}
