import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";

import styles from "../../styles/skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h2 className={styles["skills-title"]}>
        Skills <span>(ft. Learning)</span>
      </h2>
      <hr />
      <div>
        <div className={`${styles["skills-large-classification"]} basement`}>
          <h3>Basement</h3>
          <div
            className={`${styles["skills-middle-classification"]} ${styles["html-css"]}`}
          >
            <h4>HTML & CSS</h4>
            <ul>
              <li>마크업 개발을 위한 HTML 사용 가능.</li>
              <li>
                <span className={styles["underline-emphasis"]}>
                  CSS 문법을 올바른 방법으로 구사할 줄 압니다. flexbox, media
                  query, Sass 사용에 능숙
                </span>
                합니다. CSS만을 이용한 반응형 웹 스타일링을 할 수 있습니다.
              </li>
              <li>
                Bootstrap과 같은 CSS Framework 사용 경험이 있으며, 요즘은{" "}
                <span className={styles["underline-emphasis"]}>
                  Tailwindcss를 사이드 프로젝트에 적극적으로 쓰고 있어요.
                </span>
              </li>
            </ul>
          </div>
          <div
            className={`${styles["skills-middle-classification"]} javascript`}
          >
            <h4>Javascript(Node.js)</h4>
            <ul>
              <li
                className={`${styles["skills-small-classification"]} ${styles["syntax"]}`}
              >
                <span>
                  개발에 필요한 자바스크립트 문법(~ES6까지의 문법과 실행
                  컨텍스트 등)을 적절히 활용할 수 있음.
                </span>
              </li>
              <li>
                npm, yarn과 같은 패키지 매니저로 필요한 패키지를 설치하고 때에
                따라 패키지(들)의 버전 관리를 할 수 있습니다.
              </li>
              <li>
                Express.js, mongoose(MongoDB ORM)를 이용하여 백엔드 환경을
                구성하고 이를 사이드 프로젝트에 적용해본 경험이 있습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles["skills-large-classification"]} frameworks`}>
          <h3>Frameworks</h3>
          <div
            className={`${styles["skills-middle-classification"]} ${styles.framework}`}
          >
            <h4>React</h4>
            <ul>
              <li>
                클래스 컴포넌트(Class Component)를 만들고 사용할 수 있고, 클래스
                컴포넌트의 lifecycle에 대한 기본적인 이해도를 갖추고 있습니다.
              </li>
              <li className={styles["underline-emphasis"]}>
                useState, useEffect, Context API(useContext) 등 16.8버전 이후로
                추가된 React의 기능(React Hooks)으로 프로젝트를 제작할 수
                있습니다.
              </li>
              <li className={styles["underline-emphasis"]}>
                Gatsby.js, Next.js를 이용해서 정적 사이트를 만들었습니다.
              </li>
              <li>
                <span
                  className={styles["underline-emphasis"]}
                  style={{ marginRight: "0.5rem" }}
                >
                  공유 가계부 웹-앱 버전(Next.js, Redux...)을 만들고 있습니다.
                </span>
                (진행 상황 보러가기
                <div className={styles["ttattogat-link"]}>
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <a href="https://github.com/tyange/ttattogat">Go!</a>)
                </div>
              </li>
            </ul>
          </div>
          <div
            className={`${styles["skills-middle-classification"]} ${styles.framework}`}
          >
            <h4>Angular</h4>
            <ul>
              <li className={styles["underline-emphasis"]}>
                Angular와 Firebase, Github API를 이용해서 사이드 프로젝트를 만든
                경험이 있습니다.
              </li>
              <li className={styles["underline-emphasis"]}>
                Rxjs를 이용하여 상태 & 데이터 흐름을 관리할 수 있습니다.
              </li>
            </ul>
          </div>
          <div
            className={`${styles["skills-middle-classification"]} ${styles.framework}`}
          >
            <h4>Flutter</h4>
            <ul>
              <li>
                <span className={styles["underline-emphasis"]}>
                  공유 가계부 어플리케이션을 만들고 있습니다.
                </span>{" "}
                (진행 상황 보러가기
                <div className={styles["ttattogat-link"]}>
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <a href="https://tyange.notion.site/Flutter-0f1a04b91c2b464583a16b31250359ad">
                    Go!
                  </a>
                  )
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["skills-middle-classification"]}>
          <h3>Learning</h3>
          <div className={styles["skills-middle-classification"]}>
            <h4>오프라인</h4>
            <ul>
              <li>
                2018-10 ~ 2019-04 : ⌜웹 & 앱 프론트엔드⌟ 국비지원 과정 수료.
              </li>
              <li>2021 ~ 현재 : 한국방송통신대학 컴퓨터학과 3학년 재학 중.</li>
            </ul>
          </div>
          <div className={styles["skills-middle-classification"]}>
            <h4>온라인</h4>
            <ul>
              <li
                className={`${styles["skills-small-classification"]} ${styles.udemy}`}
              >
                <span>수강 완료한 Udemy Courses:</span>
                <ul>
                  <li>
                    <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
                      React - The Complete Guide (incl Hooks, React Router,
                      Redux)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/">
                      React, NodeJS, Express & MongoDB - The MERN Fullstack
                      Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com/course/the-complete-guide-to-angular-2/">
                      Angular - The Complete Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/">
                      Angular & NodeJS - The MEAN Stack Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/">
                      Vue - The Complete Guide (incl. Router & Composition API)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/">
                      Flutter & Dart - The Complete Guide
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
