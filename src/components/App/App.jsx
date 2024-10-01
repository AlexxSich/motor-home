import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation.jsx";

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.logoName}>
        <span className={css.accentColor}>Travel</span>Trucks
      </h1>
      <div className={css.navContainer}>
        <Navigation />

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/catalog" element={<div>Catalog Page</div>} />
          <Route path="*" element={<div>Sorry... Page Not Found!</div>} />
        </Routes>
      </div>
    </div>
  );
}
