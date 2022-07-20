import * as React from 'react';
import ReactDOM  from 'react-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import styles from '../styles/Home.module.css'
import { Container } from '@mui/system';

export default function App() {
  return (    
    <Container className={styles.container}>
      <Grid container>
        <CardActionArea className={styles.card}>
          <CardMedia
            component="img"
            height="200"
            image="static\images\cards\dog-in-hoodie.jpg"
            alt="green iguana"
          />
          <CardContent className={styles.code}>
            <Typography gutterBottom variant="h5" component="div">
              The Donkey Salad
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Ocean, sky, snow and ice - minute greens and giant blues - dance a delicate dance in this evocative portrayal of the life cycle of an iceberg.
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className={styles.card}>
          <CardMedia
            component="img"
            height="230"
            image="static\images\cards\dingo.jpg"
            alt="green iguana"
          />
          <CardContent className={styles.code}>
            <Typography gutterBottom variant="h5" component="div">
              The Infant Salad
            </Typography>
            <Typography variant="body1" color="text.secondary">
              My immediate purpose is to place before the world, plainly, succinctly, and without comment, a series of mere household events. 
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className={styles.card}>
          <CardMedia
            component="img"
            height="230"
            image="static\images\cards\ricky.jpg"
            alt="green iguana"
          />
          <CardContent className={styles.code}>
            <Typography gutterBottom variant="h5" component="div">
              The Black Cat
            </Typography>
            <Typography variant="body1" color="text.secondary">
              For the most wild, yet most homely narrative which I am about to pen, I neither expect nor solicit belief.
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className={styles.card}>
          <CardMedia
            component="img"
            height="230"
            image="static\images\cards\ricky.jpg"
            alt="green iguana"
          />
          <CardContent className={styles.code}>
            <Typography gutterBottom variant="h5" component="div">
              The Black Cat
            </Typography>
            <Typography variant="body1" color="text.secondary">
              For the most wild, yet most homely narrative which I am about to pen, I neither expect nor solicit belief.
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className={styles.card}>
          <CardMedia
            component="img"
            height="230"
            image="static\images\cards\ricky.jpg"
            alt="green iguana"
          />
          <CardContent className={styles.code}>
            <Typography gutterBottom variant="h5" component="div">
              The Black Cat
            </Typography>
            <Typography variant="body1" color="text.secondary">
              For the most wild, yet most homely narrative which I am about to pen, I neither expect nor solicit belief.
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className={styles.card}>
          <CardMedia
            component="img"
            height="230"
            image="static\images\cards\ricky.jpg"
            alt="green iguana"
          />
          <CardContent className={styles.code}>
            <Typography gutterBottom variant="h5" component="div">
              The Black Cat
            </Typography>
            <Typography variant="body2" color="text.secondary">
              For the most wild, yet most homely narrative which I am about to pen, I neither expect nor solicit belief.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Grid>
    </Container>
  );
}





