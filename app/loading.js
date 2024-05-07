import classes from "./loading.module.css";

const loading = () => {
  return (
    <div className={classes.loader}>
      <div></div>
      <div></div>
    </div>
  );
};

export default loading;
