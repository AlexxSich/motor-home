import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Navigation from '../Navigation/Navigation.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';

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
          <use href="/icons.svg#icon-Logo"></use>
        </svg>
        <div className={css.nav}>
          <Navigation />
        </div>
      </div>
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
