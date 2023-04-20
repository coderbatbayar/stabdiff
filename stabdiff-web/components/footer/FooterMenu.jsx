import React from "react";
import { styled } from "@mui/system";
import { Typography, Grid, Box } from "@mui/material";
import { FooterContentWrapper } from ".";

const StyledFooterMenu = styled(Box)(({ theme }) => ({
  borderTop: `2px solid ${theme.palette.border.primary}`,
  borderBottom: `2px solid ${theme.palette.border.secondary}`,
  padding: "25px",
}));

const MenuItem = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

export const FooterMenu = (props) => {
  return (
    <StyledFooterMenu>
      <FooterContentWrapper>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid xs={12} md={2}>
            <MenuItem>개인정보 처리방침</MenuItem>
          </Grid>
          <Grid xs={12} md={2}>
            <MenuItem>이용약관</MenuItem>
          </Grid>
          <Grid xs={12} md={2}>
            <MenuItem>전문영업인 위촉</MenuItem>
          </Grid>
          <Grid xs={12} md={2}>
            <MenuItem>채용공고</MenuItem>
          </Grid>
          <Grid xs={12} md={2}>
            <MenuItem>엔젤센터톡</MenuItem>
          </Grid>
        </Grid>
      </FooterContentWrapper>
    </StyledFooterMenu>
  );
};

export default FooterMenu;
