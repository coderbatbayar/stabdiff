import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { FooterMenu } from "./FooterMenu";
import { FooterSocial } from "./FooterSocial";
import { FooterContact } from "./FooterContact";
import { FooterWarning } from "./FooterWarning";

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  width: "100%",
  height: "500px",
}));

export const Footer = (props) => {
  return (
    <StyledBox {...props}>
      <FooterMenu />
      <FooterSocial />
      <FooterContact />
      <FooterWarning />
    </StyledBox>
  );
};

export default Footer;
