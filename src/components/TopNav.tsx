import { useContext } from "react";
import { PagesContext } from "../state/PagesProvider";
import styles from "./top-nav.module.less";
import { CurrentPageContext } from "../state/CurrentPageProvider";

export default function TopNav() {
  const availablePages = useContext(PagesContext);
  const { currentPageTitle, setCurrentPage } = useContext(CurrentPageContext);

  return (
    <div className={styles.topnav}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        {Object.entries(availablePages).map((entry) => {
          const key = entry[0];
          return (
            <span
              className={styles.pagelink}
              key={key}
              onClick={() => setCurrentPage(key)}
            >
              {key === currentPageTitle ? <b>{key}</b> : <>{key}</>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
