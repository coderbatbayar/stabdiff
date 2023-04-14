import React from "react";
import { styled } from "@mui/system";

const StyledContainer = styled('div')(({ theme }) => ({
  padding: '20px 40px'
}));

export const MainContainer = (props) => {
  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  )
}

export default MainContainer;