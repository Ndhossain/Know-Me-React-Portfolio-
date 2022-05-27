import classes from "./Styles/Logo.module.css";

export default function CopyRight() {
  return (
    <div className={classes.logo}>
      <p style={{ color: `#a538e3`, textAlign: `center`,fontSize: `13px`,fontWeight: `600` }}>
        &#169; {`${new Date().getFullYear()}`} KNOW-ME
      </p>
    </div>
  );
}
