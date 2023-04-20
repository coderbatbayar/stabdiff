import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography, Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "35px",
  textAlign: "center",
  padding: "40px",
  fontWeight: "bold",
}));
const GreyTypography = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.text.quaternary}`,
}));

export const NewsHeader = (props) => {
  return (
    <StyledBox {...props}>
      <Grid>
        <StyledTypography>뉴스</StyledTypography>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid>
          <Typography>전체</Typography>
        </Grid>
        <Grid>
          <GreyTypography>|</GreyTypography>
        </Grid>
        <Grid>
          <Typography>차량소식</Typography>
        </Grid>
        <Grid>
          <GreyTypography>|</GreyTypography>
        </Grid>
        <Grid>
          <Typography>회사소식</Typography>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default NewsHeader;
