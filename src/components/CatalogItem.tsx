import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { AddProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(AddProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      {' - '}
      <span>{product.price}</span>
      <button
        type="button"
        disabled={hasFailedStockCheck}
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: '#e5cc' }}>Sem estoque!</span>
      )}
    </article>
  );
};

export default CatalogItem;
