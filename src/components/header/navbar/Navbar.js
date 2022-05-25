import logo from "../../../Assets/Images/logo.png";
export default function Navbar() {
    return (
        <div
      style={{
        background: `linear-gradient(to bottom, #9844E2 , #CF22CA)`,
        display: `flex`,
        alignItems: `center`,
        gap: `4px`,
        padding: `.5em 0`
      }}
    >
      <img
        style={{ width: `4.5rem`, height: `4.5rem` }}
        src={logo}
        alt="logo"
      />
      <h1 style={{color: `#130F40`, fontSize: `2.2em`, }}>Know-Me</h1>
    </div>
    )
}