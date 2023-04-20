import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

const StyledTypography = styled(Typography)(({ theme }) => ({
  paddingTop: "10px",
  fontSize: "18px",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "10px",
  },
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  minWidth: "140px",
  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
    margin: "10px 10px 0px 10px",
  },
}));

export const NewsSearchArea = (props) => {
  return (
    <Grid container justifyContent="space-between">
      <Grid xs={12} md={12} lg={2} xl={2}>
        <StyledTypography>전체 뉴스 88건</StyledTypography>
      </Grid>
      <Grid container justifyContent="space-between" xl={6.6}>
        <StyledGrid>
          <FormControl sx={{ minWidth: "100%" }}>
            <Select defaultValue="전체" size="small">
              <MenuItem value="전체">전체</MenuItem>
              <MenuItem value="2023 년">2023 년</MenuItem>
              <MenuItem value="2022 년">2022 년</MenuItem>
              <MenuItem value="2021 년">2021 년</MenuItem>
              <MenuItem value="2020 년">2020 년</MenuItem>
              <MenuItem value="2019 년">2019 년</MenuItem>
              <MenuItem value="2018 년">2018 년</MenuItem>
              <MenuItem value="2017 년">2017 년</MenuItem>
              <MenuItem value="2016 년">2016 년</MenuItem>
              <MenuItem value="2015 년">2015 년</MenuItem>
              <MenuItem value="2014 년">2014 년</MenuItem>
              <MenuItem value="2013 년">2013 년</MenuItem>
              <MenuItem value="2012 년">2012 년</MenuItem>
            </Select>
          </FormControl>
        </StyledGrid>
        <StyledGrid>
          <FormControl sx={{ minWidth: "100%" }}>
            <Select defaultValue="전체" size="small">
              <MenuItem value="전체">전체</MenuItem>
              <MenuItem value="제목">제목</MenuItem>
              <MenuItem value="내용">내용</MenuItem>
            </Select>
          </FormControl>
        </StyledGrid>
        <StyledGrid>
          <TextField
            size="small"
            sx={{ minWidth: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton style={{ paddingInlineEnd: "0px" }}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </StyledGrid>
      </Grid>
    </Grid>
  );
};

export default NewsSearchArea;
