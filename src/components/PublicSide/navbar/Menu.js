import { useState } from "react";
import classes from "./Styles/Menu.module.css";
import "./Styles/menuanim.css";
import { useEffect } from "react";
import { gsap, Power3 } from "gsap";

export default function Menu() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // body ref
    gsap.from(`.anim`, {
      opacity: 0,
      duration: 1,
      x: `-20px`,
    });
    gsap.to(`.anim`, {
      opacity: 1,
      delay: 1.5,
      duration: .5,
      x: 0,
      ease: Power3.easeOut,
      stagger: .2,
    });
  }, []);

  return (
    <div>
      <ul className={classes.menuItems}>
        <li
          onMouseOver={(e) => {
            e.target.nextSibling.style.display = "block";
            setShow(true);
          }}
          onMouseOut={(e) => {
            e.target.nextSibling.style.display = "none";
            setShow(false);
          }}
          className={`${classes.menuItem} anim ${classes.active}`}
        >
          <span className="material-symbols-outlined">home</span>
          <span
            style={
              show
                ? { animation: "inAnimation 300ms ease-in" }
                : {
                    animation: "outAnimation 270ms ease-out",
                    animationFillMode: "forwards",
                  }
            }
            className={`${classes.menuName}`}
          >
            Home
          </span>
        </li>
        <li
          onMouseOver={(e) => {
            e.target.nextSibling.style.display = "block";
            setShow(true);
          }}
          onMouseOut={(e) => {
            e.target.nextSibling.style.display = "none";
            setShow(false);
          }}
          className={`${classes.menuItem} anim`}
        >
          <span className="material-symbols-outlined">person</span>
          <span
            style={
              show
                ? { animation: "inAnimation 300ms ease-in" }
                : {
                    animation: "outAnimation 270ms ease-out",
                    animationFillMode: "forwards",
                  }
            }
            className={classes.menuName}
          >
            About
          </span>
        </li>
        <li
          onMouseOver={(e) => {
            e.target.nextSibling.style.display = "block";
            setShow(true);
          }}
          onMouseOut={(e) => {
            e.target.nextSibling.style.display = "none";
            setShow(false);
          }}
          className={`${classes.menuItem} anim`}
        >
          <span className="material-symbols-outlined">school</span>
          <span
            style={
              show
                ? { animation: "inAnimation 300ms ease-in" }
                : {
                    animation: "outAnimation 270ms ease-out",
                    animationFillMode: "forwards",
                  }
            }
            className={classes.menuName}
          >
            Skills
          </span>
        </li>
        <li
          onMouseOver={(e) => {
            e.target.nextSibling.style.display = "block";
            setShow(true);
          }}
          onMouseOut={(e) => {
            e.target.nextSibling.style.display = "none";
            setShow(false);
          }}
          className={`${classes.menuItem} anim`}
        >
          <span className="material-symbols-outlined">design_services</span>
          <span
            style={
              show
                ? { animation: "inAnimation 300ms ease-in" }
                : {
                    animation: "outAnimation 270ms ease-out",
                    animationFillMode: "forwards",
                  }
            }
            className={classes.menuName}
          >
            Services
          </span>
        </li>
        <li
          onMouseOver={(e) => {
            e.target.nextSibling.style.display = "block";
            setShow(true);
          }}
          onMouseOut={(e) => {
            e.target.nextSibling.style.display = "none";
            setShow(false);
          }}
          className={`${classes.menuItem} anim`}
        >
          <span className="material-symbols-outlined">task</span>
          <span
            style={
              show
                ? { animation: "inAnimation 300ms ease-in" }
                : {
                    animation: "outAnimation 270ms ease-out",
                    animationFillMode: "forwards",
                  }
            }
            className={classes.menuName}
          >
            Portfolio
          </span>
        </li>
        <li
          onMouseOver={(e) => {
            e.target.nextSibling.style.display = "block";
            setShow(true);
          }}
          onMouseOut={(e) => {
            e.target.nextSibling.style.display = "none";
            setShow(false);
          }}
          className={`${classes.menuItem} anim`}
        >
          <span className="material-symbols-outlined">history_edu</span>
          <span
            style={
              show
                ? { animation: "inAnimation 300ms ease-in" }
                : {
                    animation: "outAnimation 270ms ease-out",
                    animationFillMode: "forwards",
                  }
            }
            className={classes.menuName}
          >
            Blogs
          </span>
        </li>
        <li
          onMouseOver={(e) => {
            e.target.nextSibling.style.display = "block";
            setShow(true);
          }}
          onMouseOut={(e) => {
            e.target.nextSibling.style.display = "none";
            setShow(false);
          }}
          className={`${classes.menuItem} anim`}
        >
          <span className="material-symbols-outlined">contacts</span>
          <span
            style={
              show
                ? { animation: "inAnimation 300ms ease-in" }
                : {
                    animation: "outAnimation 270ms ease-out",
                    animationFillMode: "forwards",
                  }
            }
            className={classes.menuName}
          >
            Contacts
          </span>
        </li>
      </ul>
    </div>
  );
}
