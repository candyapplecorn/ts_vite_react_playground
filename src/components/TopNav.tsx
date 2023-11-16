import { usePages } from "../state/PagesProvider";
import styles from "./top-nav.module.less";
import { useCurrentPage } from "../state/CurrentPageProvider";
import { useNavigate } from "react-router-dom";
import {getHashRoute} from "../routes/get-hash-route";

export default function TopNav() {
  const { currentPageTitle, setCurrentPage } = useCurrentPage();

  const pages = usePages();
  const navigate = useNavigate();

  return (
    <div className={styles.topnav}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        {Object.entries(pages).map((entry) => {
          const key = entry[0];
          return (
            <span
              className={styles.pagelink}
              key={key}
              onClick={() => {
                setCurrentPage(key);
                navigate(getHashRoute(key));
              }}
            >
              {key === currentPageTitle ? <b>{key}</b> : <>{key}</>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
