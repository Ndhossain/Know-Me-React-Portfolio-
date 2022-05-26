import Menu from "./Menu";
import Logo from "./Logo";
import CopyRight from "./CopyRight";
import classes from "./Styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={`${classes.menubar} d-flex`}>
      <Logo />
      <Menu />
      <CopyRight />
    </div>
  );
}
