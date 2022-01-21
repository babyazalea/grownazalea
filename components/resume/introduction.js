/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/introduction.module.css";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <h2>Introduction</h2>
      <hr />
      <article>
        <p>
          2018년, 새로운 기술을 익히고 싶어 수강한 웹디자인 과정에서 개발자라는
          직업을 발견하고 그 길을 천천히 걸어가는 중입니다.
        </p>
      </article>
    </div>
  );
}
