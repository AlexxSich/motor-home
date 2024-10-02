import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import HomePage from "../HomePage/HomePage.jsx";

export default function App() {
  return (
    <div className={css.bodyPage}>
      <div className={css.navContainer}>
        <svg
          className={css.logoName}
          width="136"
          height="16"
          aria-label="TravelTrucks"
        >
          <use href="../../../src/img/icons.svg#icon-Logo"></use>
        </svg>
        <div className={css.nav}>
          <Navigation />
        </div>
      </div>
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<div>Catalog Page</div>} />
          <Route path="*" element={<div>Sorry... Page Not Found!</div>} />
        </Routes>
      </div>
    </div>
  );
}
