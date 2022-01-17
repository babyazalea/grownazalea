import Image from "next/image";

import profilePic from "../../public/profile-pic.JPG";
import styles from "../../styles/profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className="profile-text">
        <div className="name-age">
          <span>name</span>
          <span>age</span>
        </div>
        <div className="email-github">
          <span>email</span>
          <span>email</span>
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
