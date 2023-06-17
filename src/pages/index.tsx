import React, { useState, ChangeEvent } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import { AccordionList } from "@/components/AccordionList";
import { SearchTextField } from "@/components/SearchTextField";
import { fetchUser } from "./api/github";

interface Users {
  id:number;
  login: string;
}

let myTimeout:any;

export default function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const [list, setList] = useState<Users[]>([]);
  const [accordionOpen, setAccordionOpen] = useState<boolean[]>([]);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [isFetch, setIsFetch] = useState<boolean>(false);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;

    setSearchText(searchTerm);

    clearTimeout(myTimeout);
    
    if(searchTerm !== '')
    {
      myTimeout = setTimeout(() => {searchFunction(searchTerm)}, 2000);
    }
    else
    {
      setIsFetch(false)
    }
  }

  const searchFunction = async (searchTerm: string = '') => {
    setSearchLoading(true);
    const fetchedUsers = await fetchUser(searchTerm);
    if (fetchedUsers !== undefined) {
      setList(fetchedUsers);
      setAccordionOpen(new Array(fetchedUsers.length).fill(false));
      setSearchLoading(false);
      setIsFetch(true);
    }
  }

  const handleAccordionToggle = (index:any) => {
    setAccordionOpen((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchTextField
            searchText={searchText}
            handleChangeSearch={handleChangeSearch}
            searchFunction={searchFunction}
            searchLoading={searchLoading}
          />
        </Grid>
        <Grid item xs={12}>
          {isFetch && list.length === 0?
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              Sorry, we can not find this user — <strong>{searchText}</strong>
            </Alert>
          :
          list.map((listData, index) => {
            return (
              <AccordionList 
                key={`list-${index}`}
                id={index}
                name={listData.login}
                handleAccordionToggle={handleAccordionToggle}
                accordionOpen={accordionOpen}
              />
            )
          })}
        </Grid>
      </Grid>
    </Container>
  );
}