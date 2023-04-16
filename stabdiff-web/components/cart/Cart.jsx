import Image from "next/image";
import { styled } from "@mui/system";

const StyledCart = styled("div")(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "12px"
}));

const Cart = ({ src, ...props }) => {
  return (
    <StyledCart>
      <Image src={src} fill alt="cartImage" {...props} />
    </StyledCart>
  );
};

export default Cart;
