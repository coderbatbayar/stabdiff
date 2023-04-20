import React from "react";
import { styled } from "@mui/system";
import { Typography, Grid } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  wordBreak: "keep-all",
  marginTop: "20px",
}));

export const FooterSocialFamily = (props) => {
  return (
    <Grid container xs={4} sm={1.5} md={1.5} {...props}>
      <Grid xs={12}>
        <Typography sx={{ fontWeight: "bold" }}>Family Site</Typography>
      </Grid>
      <Grid>
        <StyledTypography>
          액세서리 쇼핑몰 모빌라이즈파이낸셜서비스 정비포털
        </StyledTypography>
      </Grid>
    </Grid>
  );
};

export default FooterSocialFamily;
