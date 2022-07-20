import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Container, Box, Stack} from '@mui/material';
import Sidebar from '../static/components/sidebar';
import Navbar from '../static/components/navbar';
import dataOfCharacters from '../static/data';



function MediaCard(props: TypeOfValues) {

  const {image, name, description} = props;
  return (
    <Card sx={{ maxWidth: 220, 
                boxShadow:3,
                borderRadius:2,
                p:2,
                minWidth:85,
            }}>
      <CardMedia 
        sx={{width:96}}
        component="img"
        height='96'
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>   
  );
}

export interface TypeOfValues {
  characterId?: number,
  name: string,
  image: string,
  description: string
}

type Props = { items: TypeOfValues[] };

function MapChars(props: Props) {
  const { items } = props;
  const listOfCharacters = items.map((value, index) => {
    const {description, name, image} = value;
    return (
      <div key={index}> 
          <MediaCard description={description} name={name} image={image} />
      </div>
    );
  });

  return (
     <div>{listOfCharacters}</div>
  )
}

function App() {
  return (
    <Container>
      <Sidebar />
      <Navbar />
      <h1>Pokemon</h1>
      <Box bgcolor='skyblue'>
        <MapChars items={dataOfCharacters}/>
       <Button variant='contained' color='primary'>I'm Benjamin</Button>
       <Button variant='contained' color='secondary'>I'm Benjamin</Button>
      </Box>
    </Container>
  );
}
export default App;
