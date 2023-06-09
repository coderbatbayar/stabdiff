import React from "react";
import { styled } from "@mui/system";
import { TextField, Box, Typography } from "@mui/material";
import ItemContainer from "./ItemContainer";
import Label from "./Label";

const StyledTextField = styled(TextField)(({ theme }) => ({
  
}));

export const ExcludeToggle = (props) => {
  return (
    <ItemContainer>
      <Label>Exclude from Image</Label>
      <Typography>
        Describe details you don't want in your image like color, objects, or a scenery.
      </Typography>
    </ItemContainer>
  )
}

export default ExcludeToggle;