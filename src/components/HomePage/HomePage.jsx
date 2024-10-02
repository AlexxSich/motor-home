import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homeContainer}>
      <div className={css.homeContent}>
        <h1 className={css.homeTitle}>Campers of your dreams</h1>
        <p className={css.homeText}>
          You can find everything you want in our catalog
        </p>
        <button className={css.button}>View Now</button>
      </div>
    </div>
  );
}
