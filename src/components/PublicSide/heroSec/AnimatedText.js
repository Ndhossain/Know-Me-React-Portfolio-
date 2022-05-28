import classes from "./styles/AnimatedText.module.css";
import { useEffect, useState } from "react";

export default function AnimatedText() {
  const frontendArray = "Frontend".split("");
  const webappsArray = "Web-Apps".split("");
  const [text, setText] = useState(frontendArray);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
    if(count === 0) {
        setText(webappsArray);
        setCount(1);
    } else {
        setText(frontendArray);
        setCount(0)
    }
    }, 6000);

    return () => clearInterval(textInterval);
  }, [count, frontendArray, webappsArray]);

  return (
    <span style={{ display: `inline-block` }} className={classes.animateText}>
      {text.map((val, ind) => (
        <span key={ind}>{val}</span>
      ))}
    </span>
  );
}
