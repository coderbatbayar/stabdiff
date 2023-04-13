import React from "react";
import { styled } from "@mui/system";
import { Link } from "@/components";

const Wrapper = styled('li')(({ theme }) => ({
  display: 'initial'
}));

export const LinkList = (props) => {
  return (
    <Wrapper>
      <Link {...props} />
    </Wrapper>
  )
}

export default LinkList;