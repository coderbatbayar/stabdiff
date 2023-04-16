"use client";
import React from "react";
import { Button, styled } from "@mui/material";

const StyledImage = styled("img")({
  width: "300px",
  height: "300px",
  borderRadius: "10px",
  backgroundColor: "yellow",
  border: "none",
  overflow: "hidden"
});
const StyledTitle = styled("div")({
  fontSize: "48px",
  fontWeight: "500"
});
const StyledLayout = styled("div")({
  width: "100%",
  paddingBottom: "20px",
  display: "flex",
  justifyContent: "start",
  gap: "24px",
  alignItems: "start"
});
const StyledButton = styled(Button)(({ theme }) => ({
  height: "initial",
  backgroundColor: "#efed00",
  display: "flex",
  color: "black",
  borderRadius: "0px",
  fontSize: "24px",
  padding: "0px 20px 0px 20px"
}));

const Profile = () => {
  return (
    <StyledLayout>
      <StyledImage />
      <div>
        <StyledTitle>신현준</StyledTitle>
        <StyledButton>Edit</StyledButton>
      </div>
    </StyledLayout>
  );
};

export default Profile;
