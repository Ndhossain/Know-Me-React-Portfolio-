import Menu from "./Menu";
import Logo from "./Logo";
import CopyRight from "./CopyRight";
import classes from "./Styles/Navbar.module.css";
import { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";

export default function Navbar() {
  const bodyRef = useRef(null);

  useEffect(() => {
    // body ref
    gsap.from(bodyRef.current, {
      duration: 0.8,
      x: `-100%`,
    });
    gsap.to(bodyRef.current, {
      duration: 0.8,
      x: 0,
      ease: Power3.easeInOut,
    });
  }, []);


  return (
    <div ref={bodyRef} className={`${classes.menubar} d-flex`}>
      <Logo />
      <Menu />
      <CopyRight />
    </div>
  );
}
