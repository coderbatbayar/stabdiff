import React from "react";
import { ArtModal } from "../modal";
import MyPageModal from "../modal/MyPageModal";

export const MasonryContext = React.createContext({});

const MasonryProvider = ({ children }) => {
  const [open, setOpen] = React.useState("");
  const [type, setType] = React.useState("");
  const [filterParams, setFilterParams] = React.useState({
    category: "",
    searchKeyword: ""
  });
  const [category, setCategory] = React.useState({});

  React.useEffect(() => {
    setFilterParams({ ...filterParams, category: category });
  }, [category]);

  const handleClickArt = ({ url, type }) => {
    setOpen(url);
    setType(type);
  };
  return (
    <MasonryContext.Provider
      value={{
        category,
        setCategory,
        filterParams,
        setFilterParams,
        handleClickArt
      }}>
      {children}
      {type !== "myPage" ? (
        <ArtModal open={open} setOpen={setOpen} />
      ) : (
        <MyPageModal open={open} setOpen={setOpen} />
      )}
    </MasonryContext.Provider>
  );
};

export default MasonryProvider;
