import React from "react";
import { styled } from "@mui/system";
import { TextField, Box, Typography } from "@mui/material";
import ItemContainer from "./ItemContainer";
import Label from "./Label";

const StyledTextField = styled(TextField)(({ theme }) => ({
  
}));

export const Quality = (props) => {
  return (
    <ItemContainer>
      <Label>Quality & Details</Label>
      
    </ItemContainer>
  )
}

export default Quality;