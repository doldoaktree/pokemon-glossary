import * as React from 'react';
import {Container, Box, Stack} from '@mui/material';
import dataOfCharacters from './data.js';
import MediaCard from './components/mediacard';
import PrimarySearchAppBar from './components/search';

interface TypeOfValues {
  characterId?: number,
  name: string,
  power: string,
  image: string,
  description: string
}

type Props = { items: TypeOfValues[] };

function MapChars(props: Props):any {
  const { items } = props;
  const listOfCharacters = items.map((value, index) => {
    const {description, name, power, image} = value;
    return (
      <>
        <MediaCard key={index} description={description} name={name} power={power} image={image} />
      </>
    );
  });

  return listOfCharacters;
}

function App() {
 
  return (
    <Box sx={{ bgcolor:'#D4D4D4'}}>
        <Stack sx={{ bgcolor:'yellow'}}>
          what is in here?
        </Stack> 
        <PrimarySearchAppBar />    
      <Container sx={{bgcolor:'skyblue'}}>
          <h1>Pokemon</h1>
          <Box sx={{
            bgcolor:'skyblue',
            height:'100vh',
            display:'flex',
            flexWrap: 'wrap',
            fontWeight: 'bold',
            justifyContent: 'space-evenly'
          }}   
          >
            <MapChars items={dataOfCharacters}/>
          </Box>
      </Container>
    </Box>
  );
}
export default App;
