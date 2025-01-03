import style from "./title.module.css"
const Title = () => {
  return (
    <h2 className={style.cont}>
      <span className={style.title}>About me</span>
      <span className={style.subTitle}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
    </h2>
  );
};

export default Title;
