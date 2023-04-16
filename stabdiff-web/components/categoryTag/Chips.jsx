import { ToggleButton, styled } from "@mui/material";

const StyledChips = styled(ToggleButton)(({ theme, selected }) => ({
  borderRadius: "full"
}));

const Chips = ({ title }) => {
  return <StyledChips value={title}>{title}</StyledChips>;
};
export default Chips;
