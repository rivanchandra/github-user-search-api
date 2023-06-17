import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import StarIcon from '@mui/icons-material/Star';

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 0px',
  },
}));

export const CardList = (props:any) => {
  return(
    <Card className='card-list'>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={11}>
              <Typography gutterBottom variant="body1" component="div">
                <strong>{props.name}</strong>
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                {props.description}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <StyledBadge badgeContent={props.star} showZero>
                <StarIcon />
              </StyledBadge>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}