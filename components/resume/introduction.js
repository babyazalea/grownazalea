/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/introduction.module.css";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <h2>Introduction</h2>
      <hr />
      <article>
        <p>
          시인, 서점 직원, 음향기기 판매원, 가구 매장 직원... 개발자라는 직업을 알게 되기 전, 또 개발 공부를 하면서 거쳐간 저의 직업들입니다. 2018년 웹 디자인 강의를 수강하다가 React를 접하며 프론트엔드
          개발에 흥미가 생겼고, 이후 계속해서 웹 개발에 대한 지식을 쌓아가고 있습니다.
        </p>
        <p>새로운 개발 툴과 프레임워크를 적극적으로 활용하여 여러가지 프로젝트를 만들고 있으며, 요즘은 한국 사람들의 독서 환경을 개선할 방법에 대해 고민하고 있습니다.</p>
        <p>저의 프로그래밍이 단순한 코드의 나열로 끝나지 않고, 잘 드러나지 않는 사회의 이면을 비추는 거울이 되었으면 합니다.</p>
      </article>
    </div>
  );
}
