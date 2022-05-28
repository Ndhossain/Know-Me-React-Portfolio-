import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import classes from "./styles/SocialMenu.module.css";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SocialMenu() {
  const [check, setCheck] = useState(false);
  const matches = useMediaQuery('(max-width:620px)');
  
  return (
    <div className={classes.socialIcon}>
      <IoShareSocialOutline
      style={{color: `${check ? '#a538e3' : '#cf22ca'}`}}
        className={classes.socialButton}
        onClick={() => setCheck(!check)}
      />
      {matches ? (
        <div className={classes.socialBar}>
        <Collapse in={check}>
          <div className={classes.socials}>
            <FaFacebook
              onClick={() =>
                window.open("https://www.facebook.com/nahid.hasan341/")
              }
              className={classes.icon1}
            />
            <FaLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nahid-hossain-a7b07b22b/"
                )
              }
              className={classes.icon2}
            />
            <FaInstagram
              onClick={() =>
                window.open("https://www.instagram.com/md_nahid_h/")
              }
              className={classes.icon3}
            />
            <FaGithub
              onClick={() => window.open("https://github.com/Ndhossain")}
              className={classes.icon4}
            />
          </div>
        </Collapse>
      </div>
      ) : (
        <div>
          <FaFacebook
              onClick={() =>
                window.open("https://www.facebook.com/nahid.hasan341/")
              }
              className={classes.icon1}
            />
            <FaLinkedin
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nahid-hossain-a7b07b22b/"
                )
              }
              className={classes.icon2}
            />
            <FaInstagram
              onClick={() =>
                window.open("https://www.instagram.com/md_nahid_h/")
              }
              className={classes.icon3}
            />
            <FaGithub
              onClick={() => window.open("https://github.com/Ndhossain")}
              className={classes.icon4}
            />
        </div>
      )}
    </div>
  );
}
