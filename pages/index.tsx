import { Box, Container, Link, Typography } from "@mui/material";
import PokemonList from "../components/pokemon-list";
import PrimarySearchAppBar from "../components/primary-search-app-bar";

function Home() {
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
        <PokemonList/>
      </Box>
      <Link href="/dashboard">← Dashboard</Link>
    </Container>
  );
}
export default Home;
