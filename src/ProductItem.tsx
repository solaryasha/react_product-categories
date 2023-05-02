import { FC } from 'react';
import { Product } from './types/typedefs';

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = (props) => {
  const { product } = props;

  return (
    <li>{product.name}</li>
  );
};
