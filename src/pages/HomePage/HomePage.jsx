import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homeContainer}>
      <div className={css.homeContent}>
        <h1 className={css.homeTitle}>Campers of your dreams</h1>
        <p className={css.homeText}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog" className={css.linkAsButton}>
          View Now
        </Link>
      </div>
    </div>
  );
}
