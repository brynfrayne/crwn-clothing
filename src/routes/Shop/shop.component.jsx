import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../Category/category.component';
import './shop.styles.jsx';

export default function Shop() {
  
  return (
        <Routes>
          <Route index element={<CategoriesPreview/>} />
          <Route path=':category' element={<Category/>} />
        </Routes>
  );
};
