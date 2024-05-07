import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { PageItem } from "..";

export interface TypeOfValues {
  id:number;
  forms: PageItem [];
  // characterId?: number;
  name: string;
  url:string;
  // power: string;
  // image: string;
  // description: string;
}

export default function MediaCard(props: TypeOfValues) {
  const { name, url, forms} = props;

  const href = `/pokemons/${props.url}`;

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
        // image={image}
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
          {/* {power} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {description} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={href} size="small" variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
