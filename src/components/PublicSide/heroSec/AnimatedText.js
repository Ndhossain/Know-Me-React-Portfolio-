import classes from "./styles/AnimatedText.module.css";
import { useEffect, useState } from "react";

export default function AnimatedText() {
  const frontendArray = "Frontend".split("");
  const webappsArray = "React.js".split("");
  const [text, setText] = useState(frontendArray);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
    const textInterval = setInterval(
      () => {
        if (count === 0) {
          setText(webappsArray);
          setCount(1);
        } else {
          setText(frontendArray);
          setCount(0);
        }
      },
      play ? 6000 : null
    );

    return () => clearInterval(textInterval);
  }, [count, frontendArray, play, webappsArray]);

  return (
    <span style={{ display: `inline-block` }} className={classes.animateText}>
      {text.map((val, ind) => (
        <span className="animee" key={ind}>
          {val}
        </span>
      ))}
    </span>
  );
}
