import React from "react";
import { styled } from "@mui/system";
import Image from "../../image/Image";
import { Button } from "../../button";

const StyledButton = styled(Button)(({ theme }) => ({
  background: '#3366FF',
  borderRadius: 13,
  height: 38,
  padding: '5px 40px',

  "&:hover": {
    background: '#3366FF'
  }
}));

export const KaikasConnectButton = (props) => {
  return (
    <StyledButton startIcon={
      <Image 
        href="/"
        src="/logo/kaikas.svg" 
        alt="Kaikas logo" 
        width={16}
        height={16}
      />}
      {...props}
    >
      Connect to Kaikas
    </StyledButton>
  )
}

export default KaikasConnectButton;