import React from "react";
import { styled } from "@mui/system";
import { Grid, Box } from "@mui/material";

const StyledFooter = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  minHeight: 100,
  // width: '100%',
  background: theme.palette.secondary[theme.palette.mode]
}));

export const Footer = (props) => {
  return (
    <StyledFooter>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          회사명 : 르노코리아자동차 주식회사
          대표이사 : 스테판 드블레즈 / Stéphane Deblaise
        </Grid>
        <Grid item xs={12} md={4}>
          사업소재지 : 부산광역시 강서구 르노삼성대로61 사업자정보확인  &gt;
          통신판매업 신고 : 2010-부산강서-0086
        </Grid>
        <Grid item xs={12} md={4}>
          사이트ㆍ제품ㆍ서비스 문의 : 엔젤센터 : 080-300-3000
          대표이메일 : webmaster@renaultkoreaM.com
        </Grid>
      </Grid>
    </StyledFooter>
  )
}

export default Footer;