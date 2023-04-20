import React from "react";
import { styled } from "@mui/system";
import { TextField, Box, MenuItem, Select, FormControl } from "@mui/material";
import Label from "./Label";
import ItemContainer from "./ItemContainer";

const StyledTextField = styled(TextField)(({ theme }) => ({
  
}));

export const ModelSelect = (props) => {
  return (
    <ItemContainer>
      <Label>Model</Label>
      <FormControl fullWidth>
        <Select
          defaultValue={10}
          {...props}
        >
          <MenuItem value={10}>Stable diff</MenuItem>
        </Select>
      </FormControl>
    </ItemContainer>
  )
}

export default ModelSelect;