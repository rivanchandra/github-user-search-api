import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

export const CardList = (props:any) => {
  return(
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {props.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.star}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}