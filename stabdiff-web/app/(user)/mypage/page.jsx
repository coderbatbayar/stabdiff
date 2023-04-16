import dynamic from "next/dynamic";
import * as React from "react";
const Masonry = dynamic(() => import("../../../components/Masonry/Masonry"), {
  ssr: false
});
import Profile from "../../../components/profile/Profile";

export default function MyPage() {
  return (
    <>
      <Profile />
      <Masonry type="myPage" />
    </>
  );
}
