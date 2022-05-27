import classes from "./styles/TextLogo.module.css";
import logo from "../../../Assets/Images/logo.png";

export default function TextLogo() {
  return (
    <div className={`${classes.logos} d-flex m-1`}>
      <img
        className={classes.logo}
        src={logo}
        alt={logo}
      />
      <h1>KNOW-ME</h1>
    </div>
  );
}
