import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { PokemonDetails } from "./pokemon-details";

export interface CardProps {
  name: string;
  url: string;
}

export default function MediaCard(props: CardProps) {
  const { name, url } = props;
  const [details, setDetails] = useState<undefined | PokemonDetails>();
  const detailsUrl = `pokemons/${details?.id}`;

  const [id, setId] = useState();
  const [move, setMove] = useState();
  useEffect(() => {
    fetch(url)
      .then((x) => x.json())
      .then((x) => setDetails(x));
  }, [url]);

  useEffect(() => {
    fetch(url)
      .then((x) => x.json())
      .then();
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      return responseData;
    };
    fetchData().then((data) => {
      setId(data.id);
      setMove(data.moves[0].move.name);
      console.log(move);
    });
  });
  return (
    <Card
      sx={{
        maxWidth: 220,
        height: 280,
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        minWidth: 85,
        bgcolor: "#F6CFFC",
      }}
    >
      <CardMedia
        sx={{ width: 96, mx: "auto" }}
        component="img"
        height="96"
        image={details?.sprites.front_default}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary.main"
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          color="secondary.main"
          component="div"
        >
          {" "}
          Power: {move}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Id: {id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={detailsUrl} size="small" variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
