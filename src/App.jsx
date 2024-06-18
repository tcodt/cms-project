import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="flex relative top-16">
        <Sidebar />
        <div className="container mx-auto pl-60">{router}</div>
      </div>
    </>
  );
}

export default App;
