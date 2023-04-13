import React from "react";
import { styled } from "@mui/system";
import LinkIcon from '@mui/icons-material/Link';
import { IconButton } from "@/components";
import { Menu } from "./Menu";


const StyledMenuLink = styled(Menu)(({theme}) => ({
  
}));

export const MenuLink = (props) => {
  return (
    <>
    
      <IconButton icon={<LinkIcon />} />
      {/* <StyledMenuLink >
        
      </StyledMenuLink> */}
    </>
  )
}