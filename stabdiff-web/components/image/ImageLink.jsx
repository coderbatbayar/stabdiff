import React from "react";
import { styled } from "@mui/system";
import { Image } from "@/components";
import Link from "../link/Link";

const StyledLink = styled(Link)(({ theme }) => ({
  display: "contents"
}));

export const ImageLink = ({href, ...props}) => {
  return (
    <StyledLink href={href}>
      <Image {...props} />
    </StyledLink>
  )
}

export default ImageLink;