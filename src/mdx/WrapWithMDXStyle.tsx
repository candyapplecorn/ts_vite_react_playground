import styles from "../mdx/styles.module.less";

export default function WrapWithMDXStyle(child) {
  return <div className={styles.mdx}>{child}</div>;
}
