import "./App.css";
import { Outlet } from "react-router-dom";
import CustomCursor from "./pages/components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <Outlet />
    </>
  );
}

export default App;
