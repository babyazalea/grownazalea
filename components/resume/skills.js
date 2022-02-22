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
              <li>
                HTML의 시멘틱 태그를 이용해 웹의 구조를 만들 수 있으며 이를
                토대로{" "}
                <span className={styles["underline-emphasis"]}>
                  웹 표준을 준수
                </span>
                하는 웹을 설계할 수 있습니다.
              </li>
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
                  Tailwindcss를 사이드 프로젝트에 적극적으로 활용
                </span>
                하고 있습니다.
              </li>
            </ul>
          </div>
          <div
            className={`${styles["skills-middle-classification"]} javascript`}
          >
            <h4>Javascript</h4>
            <ul>
              <li
                className={`${styles["skills-small-classification"]} ${styles["syntax"]}`}
              >
                <span className={styles["underline-emphasis"]}>
                  문법(~ES6)에 대한 충분한 이해:
                </span>
                <ul>
                  <li>
                    let, const 각 변수 선언 방식의 특징을 알고 적절하게
                    사용합니다.
                  </li>
                  <li>
                    자바스크립트의 데이터 타입과 타입의 분류에 따른 윈시 타입과
                    객체 타입의 차이점을 알고, 활용할 수 있습니다.
                  </li>
                  <li>
                    자바스크립트 언어의 암묵적 타입 변환이 일어나는 경우를 알고
                    예측 할 수 있습니다.
                  </li>
                  <li>
                    렉시컬 스코프, Temporal Dead Zone(TDZ), 변수 & 함수 호이스팅
                    등 자바스크립트 언어의 특이점(?)을 알고 있습니다. (이런
                    특이점 때문에 발생하는 에러에 대한 경험이 있고, 에러가
                    발생하지 않으려면 코드를 어떻게 짜야하는지 대해 배웠으며,
                    여러 개발 도서를 통해 심도 있는 지식을 쌓으려 노력
                    중입니다.)
                  </li>
                </ul>
              </li>
              <li className={`${styles["skills-small-classification"]} nodejs`}>
                <span>Node.js:</span>
                <ul>
                  <li>
                    npm, yarn과 같은 패키지 매니저로 필요한 패키지를 설치하고
                    때에 따라 패키지(들)의 버전 관리를 할 수 있습니다.
                  </li>
                  <li>
                    Express.js, mongoose(MongoDB ORM)를 이용하여 백엔드 환경을
                    구성하고 이를 사이드 프로젝트에 적용해본 경험이 있습니다.
                  </li>
                </ul>
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
                  <a href="https://babyazalea.notion.site/Flutter-0f1a04b91c2b464583a16b31250359ad">
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
