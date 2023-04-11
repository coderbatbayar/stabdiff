import React from "react";
import { styled } from "@mui/system";
import Image from "next/image";

const StyledImage = styled(Image)(({ theme }) => ({

}));

export const HeaderLogo = (props) => {
  return (
    <StyledImage src="/renault-logo-korea.svg" alt="Renault Korea Logo" width={80} height={50}/>
  )
}