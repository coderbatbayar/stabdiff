import React from "react";
import { styled } from "@mui/system";

const StyledContainer = styled("div")(({ theme }) => ({}));

export const MainContainer = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default MainContainer;
