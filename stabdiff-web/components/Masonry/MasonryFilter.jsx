import React from "react";
import { styled } from "@mui/system";
import { Categorys } from "../categoryTag";
import Search from "./Search";
import ObjectUtil from "@/util/ObjectUtil";
import { MasonryContext } from "./MasonryContext";

const StyledLayout = styled("form")(({ theme }) => ({
  width: "100%",
  height: "86px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}));

const MasonryFilter = ({ type }) => {
  const { setFilterParams } = React.useContext(MasonryContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFilterParams(ObjectUtil.formDataToJson(formData));
  };
  return (
    <StyledLayout onSubmit={(e) => handleSubmit(e)}>
      <Categorys />
      {type !== "myPage" && <Search />}
    </StyledLayout>
  );
};

export default MasonryFilter;
