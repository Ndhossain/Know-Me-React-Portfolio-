import logo from "../../../Assets/Images/logo.png";
import classes from "./Styles/Logo.module.css";

export default function Logo() {
  return (
    <div className={`${classes.logo} m-1`}>
      <img
        style={{ width: `4.5rem`, height: `4.5rem` }}
        src={logo}
        alt="logo"
      />
    </div>
  );
}
