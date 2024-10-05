import css from './TruckCard.module.css';

export default function TruckCard({ truck }) {
  console.log(truck);
  return (
    <div className={css.cardContainer}>
      <div className={css.imgTruck}>
        {' '}
        <img
          src={truck.gallery[0].thumb}
          alt="truck preview"
          width="292"
          height="320"
        />
      </div>

      {/* ====================================== */}
      <div className={css.truckSpecs}>
        <ul className={css.truckTitle}>
          <li>{truck.name}</li>
          <li>
            €{truck.price}
            <button className={css.heartButton}>
              <svg
                className={css.heartIcon}
                width="24"
                height="20.57"
                aria-label="heart button"
              >
                <use href="../../../public/icons.svg#icon-heart"></use>
              </svg>
            </button>
          </li>
        </ul>
        <ul className={css.truckRatingLocation}>
          <li>
            <svg
              className={truck.rating > 3 ? css.starIconColored : css.starIcon}
              width="16"
              height="16"
              aria-label="icon star"
            >
              <use href="/public/icons.svg#icon-star"></use>
            </svg>
            {truck.rating} ({truck.reviews.length} Reviews)
          </li>
          <li>
            <svg
              className={css.mapIcon}
              width="16"
              height="16"
              aria-label="icon map"
            >
              <use href="/public/icons.svg#icon-map"></use>
            </svg>
            {truck.location}
          </li>
        </ul>
        <p className={css.truckDescription}>{truck.description}</p>
        <ul className={css.truckFacilities}>
          <li className={css.truckFacilitiesItem}>
            <svg
              className={css.diagramIcon}
              width="20"
              height="15"
              aria-label="icon diagram"
            >
              <use href="/public/icons.svg#icon-diagram"></use>
            </svg>
            {truck.transmission}
          </li>

          {truck.AC === true && (
            <li className={css.truckFacilitiesItem}>
              <svg
                className={css.windIcon}
                width="20"
                height="17.5"
                aria-label="icon wind"
              >
                <use href="/public/icons.svg#icon-wind"></use>
              </svg>
              AC
            </li>
          )}

          <li className={css.truckFacilitiesItem}>
            <svg
              className={css.fuelPumpIcon}
              width="20"
              height="20"
              aria-label="icon fuel pump"
            >
              <use href="/public/icons.svg#icon-fuel-pump"></use>
            </svg>
            {truck.engine}
          </li>

          {truck.kitchen === true && (
            <li className={css.truckFacilitiesItem}>
              <svg
                className={css.hotCupIcon}
                width="20"
                height="20"
                aria-label="icon cup hot"
              >
                <use href="/public/icons.svg#icon-cup-hot"></use>
              </svg>
              Kitchen
            </li>
          )}

          {truck.TV === true && (
            <li className={css.truckFacilitiesItem}>
              <svg
                className={css.tvIcon}
                width="20"
                height="15"
                aria-label="icon tv"
              >
                <use href="/public/icons.svg#icon-tv"></use>
              </svg>
              TV
            </li>
          )}

          {truck.radio === true && (
            <li className={css.truckFacilitiesItem}>
              <svg
                className={css.radioIcon}
                width="20"
                height="20"
                aria-label="icon radio"
              >
                <use href="/public/icons.svg#icon-ui-radios"></use>
              </svg>
              Radio
            </li>
          )}

          {truck.bathroom === true && (
            <li className={css.truckFacilitiesItem}>
              <svg
                className={css.dropLetIcon}
                width="15"
                height="20"
                aria-label="icon droplet"
              >
                <use href="/public/icons.svg#icon-bi_droplet"></use>
              </svg>
              Bathroom
            </li>
          )}

          <li className={css.truckFacilitiesItem}>
            <svg
              className={css.peopleIcon}
              width="20"
              height="15"
              aria-label="icon people"
            >
              <use href="/public/icons.svg#icon-people"></use>
            </svg>
            2 adults
          </li>
        </ul>
        <button>Show more</button>
      </div>
    </div>
  );
}
