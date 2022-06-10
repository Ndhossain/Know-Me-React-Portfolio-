import classes from "./styles/Herosec.module.css";
import myImage from "../../../Assets/Images/herosec1.jpg";
import Avatar from "@mui/material/Avatar";
import AnimatedText from "./AnimatedText";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRef, useEffect } from "react";
import AnimatedBG from "./AnimatedBG"

import { gsap, Power3, Bounce } from "gsap";

export default function HeroSec() {
  const matches = useMediaQuery("(max-width:330px)");
  const bodyRef = useRef(null);
  const avatarRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    // body ref
    gsap.from(bodyRef.current, {
      duration: 0.8,
      y: `50%`,
    });
    gsap.to(bodyRef.current, {
      duration: 0.8,
      y: 0,
      ease: Bounce.easeOut,
    });
    // avatar animation
    gsap.from(avatarRef.current, {
      opacity: 0,
      y: -100,
    });
    gsap.to(avatarRef.current, {
      opacity: 1,
      delay: 0.6,
      duration: 1.2,
      y: 0,
      ease: Power3.easeOut,
    });

    // name animation
    gsap.from(nameRef.current, {
      opacity: 0,
      y: 100,
    });
    gsap.to(nameRef.current, {
      opacity: 1,
      delay: 0.6,
      duration: 1.2,
      y: 0,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <>
    <div ref={bodyRef} className={classes.herosec}>
    <AnimatedBG />
    <div style={{position: `absolute`}}>
    <div ref={avatarRef}>
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
      </div>
      <div ref={nameRef}>
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
    </div>
    </div>
    </>
  );
}
