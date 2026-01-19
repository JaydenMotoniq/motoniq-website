import classes from "./Title.module.scss";

type Props = { children: string };

const Title = ({ children }: Props) => {
  return (
    <div className={classes.title}>
      <h2>{children}</h2>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default Title;
