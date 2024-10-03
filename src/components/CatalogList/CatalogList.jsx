import TruckCard from "../TruckCard/TruckCard";

import css from "./CatalogList.module.css";

export default function CatalogList({ trucks }) {
  return (
    <ul className={css.trucksList}>
      {trucks.map((truck) => (
        <li key={truck.id}>
          <TruckCard truck={truck} />
        </li>
      ))}
    </ul>
  );
}
