'use client';

import { ExcludeToggle, PromptTextField, Divider, Upload, GenerateButton, ModelSelect } from "@/components/generate";
import { Grid } from "@mui/material";


export default function Generate() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <PromptTextField />
        <Divider />
        <ExcludeToggle />
        <Divider />
        <Upload />
        <GenerateButton />
      </Grid>
      <Grid item xs={6}>
       
      </Grid>
      <Grid item xs={3}>
        <ModelSelect />
        <Divider />
      </Grid>
    </Grid>
  )
}
