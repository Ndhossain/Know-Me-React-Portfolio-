import TextLogo from "./TextLogo";
import SocialMenu from "./SocialMenu";
import classes from "./styles/Topbar.module.css";

export default function Topbar() {
  return (
    <div className={`${classes.topBar} d-flex`}>
      <TextLogo />
      <SocialMenu />
    </div>
  );
}
