import React from "react";
import { styled } from "@mui/system";
import { TextField, Box, MenuItem, Select, FormControl } from "@mui/material";
import { Label } from "@/components";

const StyledTextField = styled(TextField)(({ theme }) => ({
  
}));

export const ModelSelect = (props) => {
  return (
    <>
      <Label>Model</Label>
      <FormControl fullWidth>
        <Select
        
          label="Age"
          {...props}
        >
          <MenuItem value={10}>Stable diff</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default ModelSelect;