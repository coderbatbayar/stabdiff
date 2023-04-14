import React from "react";
import { styled } from "@mui/system";
import Image from "../../image/Image";
import { Button } from "../../button";

const StyledButton = styled(Button)(({ theme }) => ({
  
}));

export const MetamaskConnectButton = (props) => {
  return (
    <StyledButton {...props}>
      <Image 
        href="/"
        src="/logo/metamask.svg" 
        alt="Metamask logo" 
        width={160}
        height={30}
      />
    </StyledButton>
  )
}

export default MetamaskConnectButton;