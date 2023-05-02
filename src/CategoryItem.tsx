import { FC } from 'react';
import { ProductList } from './ProductList';
import { FullCategory } from './types/typedefs';

interface CategoryItemProps {
  category: FullCategory;
}
export const CategoryItem: FC<CategoryItemProps> = (props) => {
  const { category } = props;

  return (
    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>
            {`${category.title} - (${category.user?.name || 'undefined user'})`}
          </p>
          {category.products.length
            ? <ProductList products={category.products} />
            : <p>No products in this category</p>}
        </div>
      </div>
    </div>
  );
};
