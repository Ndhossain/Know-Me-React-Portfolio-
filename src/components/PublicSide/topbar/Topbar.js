import TextLogo from "./TextLogo";
import SocialMenu from "./SocialMenu";
import classes from "./styles/Topbar.module.css";
import { useRef, useEffect } from "react";
import { gsap, Bounce } from "gsap";

export default function Topbar() {
  const bodyRef = useRef(null);

  useEffect(() => {
    // body ref
    gsap.from(bodyRef.current, {
      duration: 0.8,
      y: `-100%`,
    });
    gsap.to(bodyRef.current, {
      opacity: 1,
      duration: 0.8,
      y: 0,
      ease: Bounce.easeOut,
    });
  }, []);

  return (
    <div ref={bodyRef} className={`${classes.topBar} d-flex`}>
      <TextLogo />
      <SocialMenu />
    </div>
  );
}
