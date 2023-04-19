'use client';

import { ExcludeToggle, PromptTextField, Divider, Upload, GenerateButton, ModelSelect } from "@/components/generate";
import { useLightningState } from "@/hooks/useLightningState";
import { postDream } from "@/services/axiosApi";
import { Grid } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Generate() {

  const queryClient = new QueryClient();
  const { lightningState } = useLightningState();

  const generate = async () => {
    try {
      const result = await postDream(query, true, lightningState.vars.dream_url);
      // setImgResult(result.image);
      console.log(result);
    } catch {
      console.log("error post dream");
    } finally {
      
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <PromptTextField />
          <Divider />
          <ExcludeToggle />
          <Divider />
          <Upload />
          <GenerateButton 
            disabled={!lightningState?.vars?.dream_url}
            onClick={generate} 
          />
        </Grid>
        <Grid item xs={6}>
        
        </Grid>
        <Grid item xs={3}>
          <ModelSelect />
          <Divider />
        </Grid>
      </Grid>
    </QueryClientProvider>
  )
}
