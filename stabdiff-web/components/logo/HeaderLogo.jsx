import React from "react";
import { styled } from "@mui/system";
import { ImageLink as BaseImage } from "@/components";

const Image = styled(BaseImage)(({ theme }) => ({
  width: 100,
  height: 86
}));

export const HeaderLogo = (props) => {
  return (
    <Image 
      href="/" 
      src="/renault-logo-korea.svg" 
      alt="Renault Korea Logo" 
      width={100}
      height={86} 
    />
  )
}

export default HeaderLogo;