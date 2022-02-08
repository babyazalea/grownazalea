import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../../public/profile-pic.JPG";
import styles from "../../styles/profile.module.css";

const babyazaleaProfile = {
  name: "유태양",
  email: "usun16@gmail.com",
};

export default function Profile() {
  return (
    // <div className={styles.profile}>
    //   <div className={styles["profile-text"]}>
    //     <div>
    //       <span>{babyazaleaProfile.name}</span>
    //       <span>{babyazaleaProfile.email}</span>
    //       <div className={styles["profile-links"]}>
    //         <a href="https://github.com/babyazalea">
    //           <FontAwesomeIcon icon={faGithub} />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="profile-picture">
    //     <div className={styles["profile-pic-wrapper"]}>
    //       <Image
    //         src={profilePic}
    //         className={styles["profile-pic"]}
    //         alt="프로필 사진"
    //         layout="fill"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className={styles.profile}>
      <div className="row is-full-width is-right">
        <div className="col-5">
          <div className={styles["profile-text"]}>
            <div>
              <span>{babyazaleaProfile.name}</span>
              <span>{babyazaleaProfile.email}</span>
              <div className={styles["profile-links"]}>
                <a href="https://github.com/babyazalea">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="profile-picture">
            <div className={styles["profile-pic-wrapper"]}>
              <Image
                src={profilePic}
                className={styles["profile-pic"]}
                alt="프로필 사진"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
