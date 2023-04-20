import React, { useContext } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { MasonryContext } from "../Masonry/MasonryContext";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "350px",
  borderRadius: "10px",
  overflow: "hidden",
  cursor: "pointer"
}));
const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover"
}));

const MasonryCart = ({ keyIndex, src, type, ...props }) => {
  const imageRef = React.useRef();
  const { handleClickArt } = useContext(MasonryContext);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const url = `https://picsum.photos/id/${getRandomInt(
    50,
    1000
  )}/${getRandomInt(100, 300)}/${getRandomInt(150, 250)}`;
  return (
    <Item onClick={() => handleClickArt({ url, type: type })}>
      <StyledImage src={url} alt={`Image ${keyIndex}`} ref={imageRef} />
    </Item>
  );
};

export default MasonryCart;
