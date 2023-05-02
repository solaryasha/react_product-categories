import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { CategoryList } from './CategoryList';
import { FullCategory } from './types/typedefs';

const preparedCategories: FullCategory[] = categoriesFromServer.map(
  (category) => {
    const foundUser = usersFromServer.find(
      user => user.id === category.ownerId,
    );

    const foundProducts = productsFromServer.filter(
      (product) => category.id === product.categoryId,
    );

    return {
      ...category,
      user: foundUser || null,
      products: foundProducts,
    };
  },
);

// CategoryList => CategoryItem => ProductList => ProductItem

export const App: React.FC = () => (
  <div className="container">
    <CategoryList categories={preparedCategories} />
  </div>
);
