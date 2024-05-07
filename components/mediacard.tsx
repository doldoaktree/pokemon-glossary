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
  const detailsUrl = `pokemons/${details?.id}`

  useEffect(() => {
    fetch(url)
      .then((x) => x.json())
      .then((x)=> setDetails(x));
  }, [url]);

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
          {/* {id} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {description} */}
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
