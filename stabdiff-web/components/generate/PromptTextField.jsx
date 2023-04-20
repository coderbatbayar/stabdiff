import React from "react";
import { styled } from "@mui/system";
import { TextField, Box } from "@mui/material";
import Label from "./Label";
import ItemContainer from "./ItemContainer";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%'
}));

export const PromptTextField = (props) => {
  return (
    <ItemContainer>
      <Label>Prompt</Label>
      <StyledTextField 
        placeholder="ex: Captur orange diesel.."
        multiline
        inputProps={{
          style: {
            height: 200
          }
        }}
        {...props}
      />
    </ItemContainer>
  )
}

export default PromptTextField;