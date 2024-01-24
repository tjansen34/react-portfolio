import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="portfolio-app">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
