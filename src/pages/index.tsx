import React, { useState, ChangeEvent } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { AccordionList } from "@/components/AccordionList";
import { SearchTextField } from "@/components/SearchTextField";
import { fetchUser } from "./api/github";

interface Users {
  id:number;
  login: string;
}

export default function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const [list, setList] = useState<Users[]>([]);
  const [accordionOpen, setAccordionOpen] = useState<boolean[]>([]);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  const searchFunction = async () => {
    setSearchLoading(true);
    const fetchedUsers = await fetchUser(searchText);
    if (fetchedUsers !== undefined) {
      setList(fetchedUsers);
      setAccordionOpen(new Array(fetchedUsers.length).fill(false));
      setSearchLoading(false);
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
          {list.map((listData, index) => {
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