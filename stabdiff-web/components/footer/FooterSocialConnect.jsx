import React from "react";
import { styled } from "@mui/system";
import { Typography, Grid } from "@mui/material";

const StyledImage = styled("img")(({ theme }) => ({
  marginRight: "20px",
}));

export const FooterSocialConnect = (props) => {
  return (
    <Grid xs={12} sm={8} md={3} container {...props}>
      <Grid xs={12}>
        <Typography sx={{ fontWeight: "bold" }}>Stay connected</Typography>
      </Grid>
      <Grid xs={8} sm={12} md={12}>
        <StyledImage
          src="https://www.renaultkoream.com/new/res/img/new2022/ico_sns01.png"
          alt="Facebook icon"
        />

        <StyledImage
          src="https://www.renaultkoream.com/new/res/img/new2022/ico_sns02.png"
          alt="Facebook icon"
        />

        <StyledImage
          src="https://www.renaultkoream.com/new/res/img/new2022/ico_sns03.png"
          alt="Facebook icon"
        />

        <StyledImage
          src="https://www.renaultkoream.com/new/res/img/new2022/ico_sns04.png"
          alt="Facebook icon"
        />
      </Grid>
    </Grid>
  );
};

export default FooterSocialConnect;
