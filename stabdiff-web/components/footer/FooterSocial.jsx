import React from "react";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import { FooterContentWrapper } from ".";
import { FooterSocialConnect } from "./FooterSocialConnect";
import { FooterSocialFamily } from "./FooterSocialFamily";

const StyledSocialGrid = styled(Grid)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.border.secondary}`,
  padding: "25px",
}));

export const FooterSocial = (props) => {
  return (
    <StyledSocialGrid>
      <FooterContentWrapper>
        <FooterSocialConnect />
        <FooterSocialFamily />
      </FooterContentWrapper>
    </StyledSocialGrid>
  );
};

export default FooterSocial;
