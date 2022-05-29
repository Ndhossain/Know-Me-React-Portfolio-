import classes from "./styles/Herosec.module.css";
import myImage from "../../../Assets/Images/herosec1.jpg";
import Avatar from "@mui/material/Avatar";
import AnimatedText from "./AnimatedText";
import Button from "@mui/material/Button";

export default function HeroSec() {
  var width = 350;
  var height = 275;

  function init() {
    var waterModel = (width, height, {
      resolution: 2.0,
      interpolate: false,
      damping: 0.985,
      clipping: 5,
      evolveThreshold: 0.05,
      maxFps: 30,
      showStats: true,
    });

    console.log(waterModel)

    var waterCanvas = (
      width,
      height,
      "waterHolder",
      waterModel,
      {
        backgroundImageUrl: "images/yourimage.jpg",
        lightRefraction: 9.0,
        lightReflection: 0.1,
        maxFps: 20,
        showStats: true,
      }
    );
    console.log(waterCanvas)
  }

  init()

  return (
    <div className={classes.herosec}>
      <Avatar
        alt="Nahid Hossain"
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
      <Button
        sx={{
          background: `linear-gradient(to right, #a538e3 , #cf22ca)`,
          marginTop: `20px`,
        }}
        variant="contained"
      >
        <span>Download CV</span>
      </Button>
    </div>
  );
}
