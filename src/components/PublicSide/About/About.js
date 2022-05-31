import Title from "../Title/Title";
import classes from "./styles/About.module.css";
import Avatar from "@mui/material/Avatar";
import myImage from "../../../Assets/Images/herosec1.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import MyGallery from "./MyGallery/MyGallery";

export default function About() {
  const matches = useMediaQuery("(max-width:330px)");
  const matches2 = useMediaQuery("(max-width:620px)");

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
            alt="Nahid Hossain"
            src={myImage}
            sx={{
              width: 200,
              height: 200,
              border: `8px solid rgba(0, 0, 0, 0.2)`,
              marginBottom: 1,
            }}
          />
          <div className={`d-flex ${classes.textSec}`}>
            <h2 style={{ fontWeight: `700`, color: `#130f40` }}>Hello,</h2>
            <p style={{}}>
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
