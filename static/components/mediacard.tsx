import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface TypeOfValues {
    characterId?: number,
    name: string,
    image: string,
    description: string
  }

export default function MediaCard(props: TypeOfValues) {

    const {image, name, description} = props;
    return (
      <Card sx={{ maxWidth: 220, 
                  height: 280,
                  boxShadow:3,
                  borderRadius:2,
                  p:2,
                  minWidth:85,
                  bgcolor:'#F6CFFC'
                }}>
        <CardMedia 
          sx={{width:96, mx:'auto'}}
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
        </CardActions>
      </Card>   
    );
  }