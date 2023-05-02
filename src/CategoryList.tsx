import { FC } from 'react';
import { CategoryItem } from './CategoryItem';
import { FullCategory } from './types/typedefs';

interface CategoryListProps {
  categories: FullCategory[];
}

export const CategoryList: FC<CategoryListProps> = (props) => {
  const { categories } = props;

  return (
    <>
      {categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </>
  );
};
