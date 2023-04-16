import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Grid, styled } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  borderRadius: "24px",
  boxShadow: 24,
  border: "none",
  p: "40px 32px 40px 32px",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#333333"
};

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover"
}));
const StyledImg = styled("img")({
  width: "80px",
  height: "80px",
  borderRadius: "12px",
  backgroundColor: "yellow",
  border: "none",
  overflow: "hidden"
});
const StyledProfileImg = styled("div")(({ theme }) => ({
  width: "700px",
  height: "700px",
  minWidth: "600px",
  objectFit: "cover",
  borderRadius: "24px",
  backgroundColor: "yellow",
  border: "none",
  overflow: "hidden"
}));
const StyledHead = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  gap: "24px",
  color: "white"
}));
const StyledInfo = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "24px",
  flexDirection: "column"
}));
const StyledButton = styled(Button)(({ theme }) => ({
  height: "initial",
  backgroundColor: "#efed00",
  display: "flex",
  color: "black",
  borderRadius: "0px",
  fontSize: "24px",
  padding: "10px",
  fontWeight: "500",
  width: "200px"
}));
const StyledHearth = styled(Button)(({ theme }) => ({
  height: "initial",
  backgroundColor: "#efed00",
  display: "flex",
  color: "black",
  alignItems: "center",
  borderRadius: "0px",
  fontSize: "18px",
  padding: "5px",
  fontWeight: "500"
}));
const StyledTitle = styled("div")({
  fontSize: "24px",
  fontWeight: "500",
  color: "white"
});
const StyledArtTitle = styled("div")({
  fontSize: "36px",
  fontWeight: "500",
  color: "white",
  padding: "20px 0px 20px 0px "
});
const StyledCopy = styled("div")({
  width: "100%",
  display: "flex",
  gap: "24px",
  flexDirection: "column",
  padding: "20px 0px 20px 0px",
  borderTop: "1px solid white",
  borderBottom: "1px solid white"
});
const StyledSpanTitle = styled("div")({
  color: "#777777",
  fontSize: "18px",
  paddingBottom: "10px"
});
const StyledSpanText = styled("div")({
  color: "#FFFFFF",
  fontSize: "18px"
});

export default function MyPageModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        disableAutoFocus={true}
        disableEnforceFocus
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <StyledHead>
              <StyledProfileImg>
                <StyledImage src={open} alt={`Image`} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "12px"
                  }}>
                  <StyledHearth>
                    <Favorite /> 165
                  </StyledHearth>
                </div>
              </StyledProfileImg>
              <StyledInfo>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                  }}>
                  <StyledImg />
                  <StyledTitle>신현준</StyledTitle>
                </div>
                <StyledArtTitle>Renault twingo</StyledArtTitle>
                <StyledCopy>
                  <div>
                    <StyledSpanTitle>Prompt</StyledSpanTitle>
                    <StyledSpanText>renalt twingo</StyledSpanText>
                  </div>
                  <StyledButton>Copy Prompt</StyledButton>
                </StyledCopy>
                <Grid
                  container
                  rowSpacing={4}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={6}>
                    <StyledSpanTitle>Prompt</StyledSpanTitle>
                    <StyledSpanText>renalt twingo</StyledSpanText>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledSpanTitle>Prompt</StyledSpanTitle>
                    <StyledSpanText>renalt twingo</StyledSpanText>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledSpanTitle>Prompt</StyledSpanTitle>
                    <StyledSpanText>renalt twingo</StyledSpanText>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledSpanTitle>Prompt</StyledSpanTitle>
                    <StyledSpanText>renalt twingo</StyledSpanText>
                  </Grid>
                  <Grid item xs={6}>
                    <StyledSpanTitle>Prompt</StyledSpanTitle>
                    <StyledSpanText>renalt twingo</StyledSpanText>
                  </Grid>
                </Grid>
              </StyledInfo>
            </StyledHead>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
                textAlign: "center",
                fontSize: "24px"
              }}>
              <p>
                center 배치
                <br /> 모달 백그라운드 backdrop-filter: blur(25px);
              </p>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
