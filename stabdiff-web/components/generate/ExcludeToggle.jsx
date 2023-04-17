import React from "react";
import { styled } from "@mui/system";
import { TextField, Box, Typography } from "@mui/material";
import { Label } from "@/components";

const StyledTextField = styled(TextField)(({ theme }) => ({
  
}));

export const ExcludeToggle = (props) => {
  return (
    <>
      <Label>Exclude from Image</Label>
      <Typography>
        Describe details you don't want in your image like color, objects, or a scenery.
      </Typography>
    </>
  )
}

export default ExcludeToggle;