import Image from "next/image";

import profilePic from "../../public/profile-pic.JPG";
import styles from "../../styles/profile.module.css";

export default function Profile() {
  return (
    <div className="row border border-primary">
      <div className="col-9 border border-warning">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-2">
                <span>name</span>
              </div>
              <div className="col-1">
                <span>age</span>
              </div>
            </div>
            <div className="row">
              <span>email</span>
              <span>github</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 border border-warning d-flex justify-content-center">
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
