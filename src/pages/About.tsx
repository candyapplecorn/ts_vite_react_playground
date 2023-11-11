import React from "react";
import AboutMDX from "../mdx/About.mdx";
import { PageInterface } from "./interface";
import WrapWithMDXStyle from "../mdx/WrapWithMDXStyle";

export const pageInterface: PageInterface<unknown> = {
  component: About,
  title: "About",
};

export default function About() {
  return WrapWithMDXStyle(<AboutMDX />);
}
