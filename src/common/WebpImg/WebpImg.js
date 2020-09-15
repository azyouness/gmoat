import React from "react";
import { canUseWebP } from "utils/helpers";

const IS_WEBP_SUPPORTED = canUseWebP();

// use webp when its supported
const WebpImg = ({ src, ...rest }) => {
  const filename = src.split(".").slice(0, -1).join(".");
  const ext = IS_WEBP_SUPPORTED ? "webp" : "jpg";
  return <img src={`${filename}.${ext}`} alt="" {...rest} />;
};

export default WebpImg;
