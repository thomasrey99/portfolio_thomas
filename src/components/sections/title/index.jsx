import style from "./title.module.css"
const Title = ({title, sub}) => {
  return (
    <h2 className={style.cont}>
      <span className={style.title}>{title}</span>
      <span className={style.subTitle}>{sub}</span>
    </h2>
  );
};

export default Title;
