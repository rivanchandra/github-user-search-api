import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CardList } from './CardList';
import { fetchRepos } from '@/pages/api/github';

interface Repository {
  id: number;
  name: string;
  stargazers_count:number;
}

export const AccordionList = (props:any) => {
  const [repoList, setRepoList] = useState<Repository[]>([]);

  const handleChange = async (event: React.SyntheticEvent, newExpanded: boolean) => {
    if(newExpanded === true) {
      const fetchedRepos = await fetchRepos(props.name);
      if (fetchedRepos !== undefined) {
        setRepoList(fetchedRepos);
      }
    }
  }

  return(
    <Accordion TransitionProps={{ unmountOnExit: true }} onChange={handleChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordion"
      >
        <Typography>{props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {repoList && repoList.map((repo, index)=> {
          return (
            <CardList 
              key={`repo-${index}`}
              name={repo.name}
              star={repo.stargazers_count}
            />
          )
        })}
      </AccordionDetails>
    </Accordion>
  )
}