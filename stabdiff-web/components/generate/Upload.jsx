import React from "react";
import { styled } from "@mui/system";
import { TextField, Box, Typography } from "@mui/material";
import Label from "./Label";
import ItemContainer from "./ItemContainer";

const StyledTextField = styled(TextField)(({ theme }) => ({
  
}));

export const Upload = (props) => {
  return (
    <ItemContainer>
      <Label>Image to Image</Label>
      <Typography>
        Upload or draw an image to use as inspiration.
      </Typography>
    </ItemContainer>
  )
}

export default Upload;