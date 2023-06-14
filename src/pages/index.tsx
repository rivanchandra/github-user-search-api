import React, { useEffect, useState, ChangeEvent } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { AccordionList } from "@/components/AccordionList";
import { SearchTextField } from "@/components/SearchTextField";
import { fetchUser } from "./api/github";

interface Users {
  id:number;
  login: string;
  // Add other properties as needed
}

export default function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const [list, setList] = useState<Users[]>([]);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  const searchFunction = async () => {
    const fetchedUsers = await fetchUser(searchText);
    if (fetchedUsers !== undefined) {
      setList(fetchedUsers);
    }
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchTextField
            searchText={searchText}
            handleChangeSearch={handleChangeSearch}
            searchFunction={searchFunction}
          />
        </Grid>
        <Grid item xs={12}>
          {list.map((listData, index) => {
            return (
              <AccordionList 
                key={`list-${index}`}
                name={listData.login}
              />
            )
          })}
        </Grid>
      </Grid>
    </Container>
  );
}