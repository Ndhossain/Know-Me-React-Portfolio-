import classes from "./Styles/Logo.module.css";

export default function CopyRight() {
  return (
    <div
      className={`d-flex ${classes.logo}`}
      style={{
        transform: `rotate(270deg)`,
        alignItems: `center`,
        height: `120px`,
        justifyContent: `center`
      }}
    >
      <p
        style={{
          color: `#a538e3`,
          fontSize: `13px`,
          fontWeight: `600`,
          marginBottom: `0`,
        }}
      >
        &#169; {`${new Date().getFullYear()}`} KNOW-ME
      </p>
    </div>
  );
}
