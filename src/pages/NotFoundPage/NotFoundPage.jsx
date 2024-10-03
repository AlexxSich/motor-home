import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p>
        Sorry... Page Not Found! Please go to <Link to="/">Home page</Link>
      </p>
    </div>
  );
}
