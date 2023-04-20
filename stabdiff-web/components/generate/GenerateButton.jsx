import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import ItemContainer from "./ItemContainer";

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: 50,
  fontSize: 24,
  color: theme.palette.text.primary,
  marginTop: 30,
  borderRadius: 0,
  background: theme.palette.secondary.main,
}));

export const GenerateButton = (props) => {
  return (
    <ItemContainer>
      <StyledButton {...props}>
        Generate
      </StyledButton>
    </ItemContainer>
  )
}

export default GenerateButton;