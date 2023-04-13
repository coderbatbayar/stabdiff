import React from "react";
import { styled } from "@mui/system";

const StyledChips = styled(div)(({ theme, selected }) => ({
  borderRadius: "30px",
  backgroundColor: selected
    ? theme.palette.quaternary.main
    : theme.palette.secondary.main
}));

export const Chips = (props) => {
  return <StyledChips {...props}>{props.children}</StyledChips>;
};
