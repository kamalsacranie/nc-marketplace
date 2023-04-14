import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import SellItem from "./routes/SellItem";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-item" element={<SellItem />} />
      </Routes>
    </>
  );
}
