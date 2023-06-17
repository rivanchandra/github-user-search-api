import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinearProgress from '@mui/material/LinearProgress';

import { CardList } from './CardList';
import { fetchRepos } from '@/pages/api/github';

interface Repository {
  id: number;
  name: string;
  description:string;
  stargazers_count:number;
  html_url:string;
}

export const AccordionList = (props:any) => {
  const [repoList, setRepoList] = useState<Repository[]>([]);
  const [cardLoading, setCardLoading] = useState<boolean>(false);

  const handleChange = async (event: React.SyntheticEvent, newExpanded: boolean) => {
    props.handleAccordionToggle(props.id)

    if(newExpanded === true) {
      setCardLoading(true);
      const fetchedRepos = await fetchRepos(props.name);
      if (fetchedRepos !== undefined) {
        console.log('fetchedRepos', fetchedRepos);
        setRepoList(fetchedRepos);
        setCardLoading(false);
      }
    }
  }

  return(
    <Accordion TransitionProps={{ unmountOnExit: true }} expanded={props.accordionOpen[props.id]} onChange={handleChange} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{background:'#f2f2f2'}}
      >
        <Typography>{props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {cardLoading?
          <LinearProgress color="inherit"/>
          :
          repoList && repoList.map((repo, index)=> {
            return (
              <div onClick={() => window.open(repo.html_url, "_blank")} key={`repo-${index}`}>
                <CardList
                  key={`repo-${index}`}
                  name={repo.name}
                  star={repo.stargazers_count}
                  description={repo.description}
                />
              </div>
            )
          })
        }
      </AccordionDetails>
    </Accordion>
  )
}