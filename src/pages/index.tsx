import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { AccordionList } from "@/components/AccordionList";
import { SearchTextField } from "@/components/SearchTextField";

export default function Home() {

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchTextField />
        </Grid>
        <Grid item xs={12}>
          <AccordionList />
        </Grid>
      </Grid>
    </Container>
  )
}
