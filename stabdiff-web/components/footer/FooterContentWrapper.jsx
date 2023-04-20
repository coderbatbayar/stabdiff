import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Wrapper = styled(Box)({
  width: "75%",
  margin: "0 auto",
  display: "flex",
});

export const FooterContentWrapper = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default FooterContentWrapper;
