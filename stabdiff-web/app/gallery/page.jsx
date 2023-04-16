import { Banner } from "../../components/banner/Banner";
import dynamic from "next/dynamic";
import * as React from "react";
const Masonry = dynamic(() => import("../../components/Masonry/Masonry"), {
  ssr: false
});
const Gallery = () => {
  return (
    <>
      <Banner />
      <Masonry />
    </>
  );
};

export default Gallery;
