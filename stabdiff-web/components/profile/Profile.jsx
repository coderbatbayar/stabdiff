"use client";
import React from "react";
import { Button, styled } from "@mui/material";

const StyledImage = styled("img")({
  width: "210px",
  height: "210px",
  borderRadius: "10px",
  backgroundColor: "yellow",
  border: "none none none none",
  overflow: "hidden",
  marginBottom: "24px"
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
  gap: "43px",
  alignItems: "start"
});
const StyledButton = styled(Button)(({ theme }) => ({
  height: "initial",
  backgroundColor: "#efed00",
  display: "flex",
  color: "black",
  borderRadius: "0px",
  fontWeight: "500",
  fontSize: "24px",
  padding: "5px 20px 5px 20px"
}));

const Profile = () => {
  return (
    <StyledLayout>
      <StyledImage />
      <div>
        <StyledTitle>신현준</StyledTitle>
        <StyledButton>EDIT</StyledButton>
      </div>
    </StyledLayout>
  );
};

export default Profile;
