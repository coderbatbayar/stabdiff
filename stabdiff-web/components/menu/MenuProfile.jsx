import React from "react";
import { styled } from "@mui/system";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button } from "@/components";

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',

  "&:hover": {
    color: theme.palette.tertiary[theme.palette.mode]
  }
  // "& > span": {
  //   fontSize: 12
  // }
}));

export const MenuProfile = (props) => {
  return (
    <>
      <StyledButton {...props}>
        <PersonOutlineIcon />
        {/* <span>Login</span> */}
      </StyledButton>
    </>
  )
}

export default MenuProfile;