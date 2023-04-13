import React from "react";
import { styled } from "@mui/system";
import { ImageLink as BaseImage } from "@/components";

const Image = styled(BaseImage)(({ theme }) => ({
  width: 52,
  height: 34
}));

export const HeaderLogo = (props) => {
  return (
    <Image 
      href="/" 
      src="/renault-logo-korea.svg" 
      alt="Renault Korea Logo" 
      width={52}
      height={34} 
    />
  )
}

export default HeaderLogo;