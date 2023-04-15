import React from "react";
import { styled } from "@mui/system";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link, VerticalIconButton } from "@/components";



export const MenuProfile = (props) => {
  return (
    <Link href="https://www.renaultkoream.com/new/login/login_rkm.jsp?app_key=snVXszoaeTeODWioxyqG&return_url=https://dev.renault.co.kr/rkm.jsp">
      <VerticalIconButton 
        icon={<PersonOutlineIcon />} 
      >
        로그인/회원가입
      </VerticalIconButton>
    </Link>
  )
}

export default MenuProfile;