import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { FooterContentWrapper } from ".";

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: "25px",
  textAlign: "center",
}));

const StyledContactGrid = styled(Grid)(({ theme }) => ({
  padding: "25px",
  display: "flex",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.text.quaternary}`,
}));

export const FooterContact = (props) => {
  return (
    <>
      <StyledContactGrid>
        <FooterContentWrapper>
          <Grid container justifyContent="space-between">
            <Grid xs={12} sm={12} md={3}>
              <Grid container>
                <Grid xs={12} sm={12}>
                  <Typography>회사명 : 르노코리아자동차 주식회사</Typography>
                </Grid>
                <Grid>
                  <Typography>
                    대표이사 : 스테판 드블레즈 / Stéphane Deblaise
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={12} md={4}>
              <Grid container>
                <Grid xs={12} md={8}>
                  <Typography>
                    사업소재지 : 부산광역시 강서구 르노삼성대로61
                  </Typography>
                </Grid>
                <Grid xs={12} md={3}>
                  <StyledTypography>사업자정보확인 &#x3E;</StyledTypography>
                </Grid>

                <Grid>
                  <Typography>통신판매업 신고 : 2010-부산강서-0086</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={12} md={3}>
              <Grid container>
                <Grid xs={12} sm={12} md={3}>
                  <Typography>
                    사이트ㆍ제품ㆍ서비스 문의 : 엔젤센터 : 080-300-3000
                  </Typography>
                </Grid>
                <Grid>
                  <Typography>대표이메일 : </Typography>
                </Grid>
                <Grid>
                  <Typography>webmaster@renaultkoreaM.com</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FooterContentWrapper>
      </StyledContactGrid>
      <StyledGrid>
        <StyledTypography>
          Copyright © RENAULT KOREA MOTORS. All Rights Reserved.
        </StyledTypography>
      </StyledGrid>
    </>
  );
};

export default FooterContact;
