import logo from "../../Assets/Images/logo.png";

export default function Logo() {
  return (
    <div>
      <img
      className="m-1"
      style={{ width: `4.5rem`, height: `4.5rem` }}
      src={logo}
      alt="logo"
    />
    </div>
  );
}
