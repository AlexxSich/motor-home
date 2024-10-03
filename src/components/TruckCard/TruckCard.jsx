import css from "./TruckCard.module.css";

export default function TruckCard({ truck }) {
  console.log(truck.name);
  return <div className={css.cardContainer}>Truck {truck.name}</div>;
}
