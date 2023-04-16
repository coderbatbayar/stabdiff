import React from "react";
import { styled } from "@mui/system";
import { OutlinedInput, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledButton = styled(Button)(({ theme }) => ({
  height: "initial",
  backgroundColor: "#efed00",
  display: "flex",
  color: "black",
  borderRadius: "0px"
}));

const Search = () => {
  return (
    <div style={{ display: "flex" }}>
      <OutlinedInput
        name="searchKeyword"
        sx={{ borderRadius: "0px" }}
        type="text"
      />
      <StyledButton type="submit">
        <SearchIcon fontSize="large" />
      </StyledButton>
    </div>
  );
};

export default Search;
