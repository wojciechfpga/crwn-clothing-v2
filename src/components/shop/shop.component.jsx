import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../routes/category-preivew/category-preview.component';
import Category from '../../routes/category/category.component';

import './shop.component.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;