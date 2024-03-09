import { PageInterface } from "./interface";
import "./work-sans.module.less";
import styles from "./flip-card.module.less";

type ViteBoilerPlateProps = object;

export const pageInterface: PageInterface<ViteBoilerPlateProps> = {
  component: FlipCard,
  title: "Vite Boilerplate",
};
export default function FlipCard() {
  return (
    <section>
      <div className={styles["flip-card"]}>
        <div className={styles["flip-card-inner"]}>
          {/*<div className={styles["flip-card-front"]}>*/}
          {/*  <img*/}
          {/*    src="https://static.wixstatic.com/media/753990_862156d001fb426693c16a95aa45d86d~mv2.jpg/v1/crop/x_101,y_57,w_500,h_387/fill/w_412,h_322,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/buffalo-nichols-1-700x500.jpg"*/}
          {/*    alt=""*/}
          {/*  />*/}
          {/*  <div className={styles["performer-name"]}>BUFFALO NICHOLS</div>*/}
          {/*</div>*/}

          <div className={styles["flip-card-back"]}>
            <div className={styles["title"]}>BAHAMAS</div>
            <div className={styles["itinerary"]}>
              <span className={styles["stage"]}>Swan Stage</span>
              <span className={styles["date"]}>Sat, Sep 30</span>
              <span className={styles["time"]}>2:05 - 2:55</span>
            </div>

            <div className={styles["media-links"]}>
              <img
                src="https://static.wixstatic.com/media/753990_5bf46daa2c594e85849837fee946a249~mv2.png"
                alt="Home"
              />
              <img
                src="https://static.wixstatic.com/media/753990_c024b30a1e2e4f76b65ef2099e18683b~mv2.png"
                alt="Spotify"
              />
              <img
                src="https://static.wixstatic.com/media/753990_f9623a045294439daeceb4b9d6ee3e4d~mv2.png"
                alt="Instagram"
              />
              <img
                src="https://static.wixstatic.com/media/753990_dce17df09d23491da4ebb8ed2b76195f~mv2.png"
                alt="Facebook"
              />
              <img
                src="https://static.wixstatic.com/media/753990_49162c7e794c434f8ab6864695fe1403~mv2.png"
                alt="Twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
