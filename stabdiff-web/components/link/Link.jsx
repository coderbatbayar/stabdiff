import React from "react";
import { styled } from "@mui/system";
import Link from "next/link";

const StyledLink = styled(Link)(({ theme }) => ({
  display: "block",
  textDecoration: "none",
  color: "inherit",
  "&:visited": {
    color: 'inherit'
  }
}));

const NextLink = (props) => {
  return (
    <StyledLink {...props}>
      {props.children}
    </StyledLink>
  )
}

export default NextLink;