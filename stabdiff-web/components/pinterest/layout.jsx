"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  border: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "24px",
  overflow: "hidden"
}));

export default function PinterestLayout() {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined
  });
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <Box sx={{ width: "100%", minHeight: "auto", margin: "auto" }}>
      <Masonry
        columns={Math.floor(+windowSize.width * 0.003)}
        spacing={1}
        sx={{ items: "center" }}>
        {heights.map((height, index) => (
          <Carts key={index} keyIndex={index} />
        ))}
      </Masonry>
    </Box>
  );
}

const Carts = ({ keyIndex }) => {
  const imageRef = React.useRef();
  const [imageHeights, setImageHeights] = React.useState(heights);
  const handleImageLoad = (index, height) => {
    setImageHeights((prevHeights) => {
      const updatedHeights = [...prevHeights];
      updatedHeights[index] = height;
      return updatedHeights;
    });
  };
  const onLoadImg = ({ target: img }) => {
    if (imageRef) {
      setImageHeights();
      console.log(img.offsetWidth, img.offsetHeight);
    }
  };
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <Item sx={{ height: imageHeights }}>
      <img
        src={`https://picsum.photos/id/${getRandomInt(50, 1000)}/${getRandomInt(
          100,
          300
        )}/${getRandomInt(150, 250)}`}
        alt={`Image ${keyIndex}`}
        ref={imageRef}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        onLoad={(e) => onLoadImg(e)}
      />
    </Item>
  );
};
