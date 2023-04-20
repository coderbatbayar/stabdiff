import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography, Box } from "@mui/material";

const StyledGrid = styled(Grid)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.border.secondary}`,
  paddingTop: "15px",
  paddingBottom: "15px",
}));

const Type = styled(Typography)(({ theme }) => ({
  padding: "4px 20px 4px 20px",
  marginRight: "12px",
  fontSize: "15px",
  background: "black",
  color: "white",
  Width: "100px",
  textAlign: "center",
}));

const Article = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: `${theme.palette.text.quaternary}`,
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    heigth: "auto",
  },
}));

export const NewsContent = ({ data }) => {
  const { id, img, title, type, article, date } = data;

  return (
    <StyledGrid container justifyContent="space-between">
      <Grid justifyContent="center" xs={12} md={3.7}>
        <Image src={img}></Image>
      </Grid>
      <Grid mt={2} md={7.5}>
        <Grid container justifyContent="space-between">
          <Grid xl={2.2}>
            <Type>{type}</Type>
          </Grid>
          <Grid lg={8} xl={9.3}>
            <Typography variant="h6">{title}</Typography>
          </Grid>
        </Grid>
        <Grid mt={2}>
          <Article>{article}</Article>
        </Grid>
        <Grid mt={1}>
          <Article>{date}</Article>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

export default NewsContent;
