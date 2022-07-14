import classes from "../../css/CloseButton.module.css";

const CloseButton = (props) => {
  return (
    <button className={classes.close} onClick={props.closeItem}>
      <span>&times;</span>
    </button>
  );
};

export default CloseButton;
