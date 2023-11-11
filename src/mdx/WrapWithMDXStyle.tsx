import React from "react";
import styles from "../mdx/styles.module.less";

export default function WrapWithMDXStyle(child: React.ReactElement) {
  return <div className={styles.mdx}>{child}</div>;
}
