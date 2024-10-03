import { useEffect, useState } from 'react';
import css from './CatalogPage.module.css';
import { getTrucks } from '../../trucks-api';
import CatalogList from '../../components/CatalogList/CatalogList';

export default function CatalogPage() {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    getTrucks().then(data => setTrucks(data));
  }, []);
  return (
    <div className={css.CatalogContainer}>
      <h2>Catalog</h2>
      {trucks.length > 0 && <CatalogList trucks={trucks} />}
    </div>
  );
}
