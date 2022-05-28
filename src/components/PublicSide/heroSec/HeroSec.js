import classes from "./styles/Herosec.module.css";
import myImage from "../../../Assets/Images/herosec1.jpg";
import Avatar from "@mui/material/Avatar";
import AnimatedText from "./AnimatedText";

export default function HeroSec() {
  return (
    <div className={classes.herosec}>
      <Avatar
        alt="Remy Sharp"
        src={myImage}
        sx={{
          width: 200,
          height: 200,
          border: `8px solid rgba(255, 255, 255, 0.1)`,
          marginBottom: 1,
        }}
      />
      <h1>Md Nahid Hossain</h1>
      <span
        className="text-white"
        style={{ display: `inline-block`, fontSize: `20px` }}
      >
        I'm a <AnimatedText /> Developer
      </span>
    </div>
  );
}
