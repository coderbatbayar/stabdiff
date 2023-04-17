import React from "react";
import { styled } from "@mui/system";
import { TextField, Box, Typography } from "@mui/material";
import { Label } from "@/components";

const StyledTextField = styled(TextField)(({ theme }) => ({
  
}));

export const Upload = (props) => {
  return (
    <>
      <Label>Image to Image</Label>
      <Typography>
        Upload or draw an image to use as inspiration.
      </Typography>
    </>
  )
}

export default Upload;