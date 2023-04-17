import React from "react";
import { styled } from "@mui/system";
import { TextField, Box } from "@mui/material";
import { Label } from "@/components";

const StyledTextField = styled(TextField)(({ theme }) => ({
  
}));

export const PromptTextField = (props) => {
  return (
    <>
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
    </>
  )
}

export default PromptTextField;