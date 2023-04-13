import dynamic from "next/dynamic";
import * as React from "react";
const Layout = dynamic(() => import("../../components/pinterest/layout"), {
  ssr: false
});
const Gallery = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default Gallery;
