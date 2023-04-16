import React from "react";
import { styled } from "@mui/system";
import { Categorys } from "../categoryTag";
import Search from "./Search";
import ObjectUtil from "@/util/ObjectUtil";

const StyledLayout = styled("form")(({ theme }) => ({
  width: "100%",
  height: "86px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}));

const MasonryFilter = ({ type }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(ObjectUtil.formDataToJson(formData));
  };
  return (
    <StyledLayout onSubmit={(e) => handleSubmit(e)}>
      <Categorys />
      {type !== "myPage" && <Search />}
    </StyledLayout>
  );
};

export default MasonryFilter;
