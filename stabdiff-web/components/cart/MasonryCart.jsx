"use client";
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
  width: "350px",
  borderRadius: "10px",
  overflow: "hidden",
  cursor: "pointer"
}));
const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover"
}));

const MasonryCart = ({ car, keyIndex, src, type, ...props }) => {
  const imageRef = React.useRef();
  const { handleClickArt } = useContext(MasonryContext);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const url = `${car.image}`;
  return (
    <Item onClick={() => handleClickArt({ url: car.image, type: type })}>
      <StyledImage src={car.image} alt={`Image ${keyIndex}`} ref={imageRef} />
    </Item>
  );
};

export default MasonryCart;
