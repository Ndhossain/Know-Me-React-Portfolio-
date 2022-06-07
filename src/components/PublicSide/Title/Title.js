import classes from "./styles/Title.module.css";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Title({ text }) {
  const titleRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: `-100px`,
    });
    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 1.2,
      y: 0,
      ease: Power3.easeIn,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(borderRef.current, {
      opacity: 0,
      x: `-50px`,
    });
    gsap.to(borderRef.current, {
      opacity: 1,
      duration: 1.2,
      x: 0,
      ease: Power3.easeIn,
      scrollTrigger: {
        trigger: borderRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div>
      <h1 ref={titleRef} className={`${classes.title} m-2`}>
        {text}
      </h1>
      <div ref={borderRef} className={`${classes.border} m-2`}></div>
    </div>
  );
}
