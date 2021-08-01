//CSS Module
import React from 'react';
// CSS Moudle이 적용된 파일을 불러오면 객체를 하나 전달 받는데 CSS Module에서 사용한 클래스 이름과 해당
// 이름을 고유화한 값이 키-값 형태로 들어 있다.
// CSS Module을 사용한 클래스 이름은 자동으로 고유해질 것이므로 자주 사용되는 클래스 이름으로 마음대로 사용 가능하다.
// 이 고유한 클래스 이름을 사용하려면 클래스를 적용하고 싶은 JSX 엘리먼트에 className={styles.[클래스 이름]}
// 형태로 전달해 주면 된다. :global을 사용하여 전역적으로 선언한 클래스의 경우 일반 CSS처럼 문자열로 넣어 준다.
import styles from './Step03.css';
// Sass를 사용할 때도 파일 이름뒤에 .module.scss 확장자를 사용해 주면 CSS Module로 사용이 가능하다.
import scssStyles from '/Step03.module.scss';

const Step03 = () => {
  return (
    <>
      <div className={styles.wrapper}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      <div className={scssStyles.wrapper}>
        안녕하세요, 저는 <span className="something">CSS Module with Sass!</span>
      </div>
      <div className={`${scssStyles.wrapper} ${scssStyles.inverted}`}>
        안녕하세요, 저는 <span className="something">CSS Module with Sass!</span>
      </div>
    </>
  );
};

export default Step03;
