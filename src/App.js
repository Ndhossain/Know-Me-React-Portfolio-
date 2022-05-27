import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicSide from "./components/PublicSide/PublicSide";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicSide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
