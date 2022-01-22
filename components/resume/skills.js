import styles from "../../styles/skills.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
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
                합니다. 순수하게 CSS만을 이용하는 반응형 웹 스타일링을
                좋아합니다. Bootstrap, tailwind-css와 같은 CSS-Framework 사용
                경험도 있습니다.
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
                    var, let, const 각 키워드의 특징을 알고 적절하게 사용합니다.
                    (var 키워드는 더이상 사용하지 않지만요!)
                  </li>
                  <li>
                    자바스크립트의 데이터 타입과 그것을 분류하는 2가지인 윈시
                    타입과 객체 타입의 차이점을 알고, 활용할 수 있습니다.
                  </li>
                  <li>
                    자바스크립트 언어의 암묵적 타입 변환이 일어나는 경우를 알고
                    예측 할 수 있습니다.
                  </li>
                  <li>
                    렉시컬 스코프, Temporal Dead Zone(TDZ), 변수 & 함수 호이스팅
                    등 자바스크립트 언어의 특이점(?)을 알고 있습니다. (이런
                    특이점으로 발생하는 에러는 대부분 linter가 걸러주기에 문제가
                    되지 않겠지만 에러가 왜 발생했는지, 에러가 발생하지 않으려면
                    코드를 어떻게 짜야하는지 대해 배웠습니다.)
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
                추가된 React의 기능들로 프로젝트를 만들 수 있습니다.
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
                Rxjs를 이용하여 데이터 흐름을 관리할 수 있습니다.
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
                </div>
                )
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
