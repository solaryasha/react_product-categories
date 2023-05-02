import { FC } from 'react';
import { ProductItem } from './ProductItem';
import { Product } from './types/typedefs';

interface ProductListProps {
  products: Product[];
}

export const ProductList: FC<ProductListProps> = (props) => {
  const { products } = props;

  return (
    <ul className="ui list">
      {products.map(product => (
        <ProductItem
          product={product}
          key={product.id}
        />
      ))}
    </ul>
  );
};
