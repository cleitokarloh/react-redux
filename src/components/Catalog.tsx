import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';

import { IState } from '../store';
import { ListCatalogProductsRequest } from '../store/modules/catalog/actions';
import { ICatalogState } from '../store/modules/catalog/types';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const catalog = useSelector<IState, ICatalogState>(state => state.catalog);

  useEffect(() => {
    // api.get('/products').then(response => setCatalog(response.data));
    dispatch(ListCatalogProductsRequest());
  }, [dispatch]);

  return (
    <main>
      <h1>Catálogo</h1>
      {catalog.error && <strong>Erro! estamos trazendo o cache.</strong>}
      {catalog.items.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;
