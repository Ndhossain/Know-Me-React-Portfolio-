import "./Layout.module.css";
import HeroSec from "./heroSec/HeroSec";
import Topbar from "./topbar/Topbar";

export default function Layout({ children }) {
  return (
    <main>
      <Topbar />
      <HeroSec />
      <div>{children}</div>
    </main>
  );
}
