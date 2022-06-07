import Title from "../Title/Title";
import classes from "./styles/About.module.css";
import Avatar from "@mui/material/Avatar";
import myImage from "../../../Assets/Images/herosec1.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import MyGallery from "./MyGallery/MyGallery";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const matches = useMediaQuery("(max-width:330px)");
  const matches2 = useMediaQuery("(max-width:620px)");
  const avatarRef = useRef(null);
  const textSecRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      avatarRef.current,
      {
        opacity: 0,
        x: `-100%`,
      },
      {
        opacity: 1,
        duration: 1.2,
        x: 0,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: avatarRef.current,
          start: `top center+=200`,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textSecRef.current,
      {
        opacity: 0,
        x: `100%`,
      },
      {
        opacity: 1,
        duration: 1.2,
        x: 0,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: avatarRef.current,
          start: `top center+=${matches2 ? 400 : 200}`,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [matches2]);

  return (
    <>
      <div className="mt-5">
        <Title text={"About Me"} />
        <div
          className={`mt-5 d-flex ${matches2 ? "p-2" : "p-5"} ${
            classes.aboutBody
          }`}
        >
          <Avatar
            ref={avatarRef}
            alt="Nahid Hossain"
            src={myImage}
            sx={{
              width: 200,
              height: 200,
              border: `8px solid rgba(0, 0, 0, 0.2)`,
              marginBottom: 1,
              position: `relative`,
              zIndex: `-1`,
            }}
          />
          <div ref={textSecRef} className={`d-flex ${classes.textSec}`}>
            <h2 style={{ fontWeight: `700`, color: `#130f40` }}>Hello,</h2>
            <p>
              I'm a Web-Developer. I have rich experience in Web Application
              development &amp; Wordpress Customization. Also I Am Good At
              Frontend development with Html, Css, Javascript, React,
              Material-Ui, Bootstrap, Redux &amp; Backend with Nodejs, MongoDB,
              express. I have a good knowledge about Firebase, Authentication.
            </p>
            <div className={`${classes.intro}`}>
              <span>
                <strong>Name:</strong> Md. Nahid Hossain
              </span>
              <span>
                <strong>Birthday:</strong> 30 October 2001
              </span>
              <span>
                <strong>Location:</strong> Dinajpur,Bangladesh
              </span>
              <span>
                <strong>Email:</strong> hhhssnahiid@gmail.com
              </span>
            </div>
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
      <div className="mt-5">
        <MyGallery />
      </div>
    </>
  );
}
