import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import SellItem from "./routes/SellItem";
import { createContext } from "react";
import { useState } from "react";

export const CurrentUserContext = createContext();


export default function App() {
  const currentUser = useState({
    username: "Guest",
    avatar_url: "https://this-person-does-not-exist.com/img/avatar-gen11b0f7fc8da48b9e703818375619f283.jpg"
  })
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell-item" element={<SellItem  />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}
