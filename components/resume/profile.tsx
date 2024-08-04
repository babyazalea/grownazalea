import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import profilePic from "../../public/profile-pic.png";
import velogLogo from "../../public/logos/velog-logo.png";
import styles from "../../styles/profile.module.css";

const tyange = {
  name: "유태양",
  email: "usun16@gmail.com",
};

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles["profile-text"]}>
        <div>
          <span>{tyange.name}</span>
          <a href={`mailto:${tyange.email}`}>{tyange.email}</a>
          <div className={styles["profile-links"]}>
            <a href="https://github.com/tyange">
              <FontAwesomeIcon icon={faGithub as IconProp} />
            </a>
            <a href="https://velog.io/@tyange/posts" className={styles.velog}>
              <Image width={23} src={velogLogo} alt="velog 로고" />
            </a>
          </div>
        </div>
      </div>
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
  );
}
