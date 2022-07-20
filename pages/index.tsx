import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {Container, Box, Stack} from '@mui/material';
import Sidebar from '../static/components/sidebar';
import Navbar from '../static/components/navbar';
import dataOfCharacters from '../static/data';
import MediaCard from '../static/components/mediacard';
import PrimarySearchAppBar from '../static/components/search';

interface TypeOfValues {
  characterId?: number,
  name: string,
  image: string,
  description: string
}

type Props = { items: TypeOfValues[] };

function MapChars(props: Props):any {
  const { items } = props;
  const listOfCharacters = items.map((value, index) => {
    const {description, name, image} = value;
    return (
      <>
        <MediaCard key={index} description={description} name={name} image={image} />
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
        {/* <Sidebar /> */}
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
