import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CardList } from './CardList';


export const AccordionList = (props:any) => {
  return(
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordion"
      >
        <Typography>{props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>

        <CardList />
        
      </AccordionDetails>
    </Accordion>
  )
}