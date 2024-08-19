import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./features/nav/Nav";
import SideBar from "./features/sidebar/SideBar";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import "./App.css";
import TailwindsElements from "./pages/UIElements/TailwindElements/TailwindsElements";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <SideBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/DashboardPage" element={<DashboardPage />} />
          <Route path="/tailwindElements" element={<TailwindsElements />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
