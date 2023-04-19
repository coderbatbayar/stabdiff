import React from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.text.quaternary}`,
}));

const StyledWarningGrid = styled(Grid)(({ theme }) => ({
  background: `${theme.palette.quinary.main}`,
  padding: "25px",
  textAlign: "center",
}));

export const FooterWarning = (props) => {
  return (
    <StyledWarningGrid>
      <Grid container>
        <Grid xs={12}>
          <StyledTypography>
            ! 차량과 관련된 정보는 실제와 차이가 있을 수 있습니다. 더 자세한
            정보는 가까운 전시장을 통해 문의하시기 바랍니다.
          </StyledTypography>
        </Grid>
        <Grid xs={12}>
          <StyledTypography>
            ! 르노코리아자동차 홈페이지는 IE9 버전 이상의 브라우저에 최적화
            되어있습니다.
          </StyledTypography>
        </Grid>
      </Grid>
    </StyledWarningGrid>
  );
};

export default FooterWarning;
