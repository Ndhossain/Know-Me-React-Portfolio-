import classes from "./styles/Herosec.module.css";
import myImage from "../../../Assets/Images/herosec1.jpg";
import Avatar from "@mui/material/Avatar";
import AnimatedText from "./AnimatedText";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HeroSec() {
  const matches = useMediaQuery("(max-width:330px)");

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
      <Stack
        spacing={2}
        direction={matches ? "column" : "row"}
        sx={{ marginTop: `20px` }}
      >
        <Button
          sx={{
            background: `linear-gradient(to right, #a538e3 , #cf22ca)`,
          }}
          variant="contained"
        >
          <span
            style={{ fontSize: `15px` }}
            className="material-symbols-outlined"
          >
            cloud_download
          </span>
          <span style={{ marginLeft: `.5em` }}>Download CV</span>
        </Button>
        <Button
          sx={{
            background: `linear-gradient(to right, #a538e3 , #cf22ca)`,
          }}
          variant="contained"
        >
          <span
            style={{ fontSize: `15px` }}
            className="material-symbols-outlined"
          >
            mail
          </span>
          <span style={{ marginLeft: `.5em` }}>Hire Me</span>
        </Button>
      </Stack>
    </div>
  );
}
