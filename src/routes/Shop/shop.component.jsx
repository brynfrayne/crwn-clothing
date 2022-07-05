import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../Category/category.component';
import './shop.styles.jsx';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        dispatch(setCategoriesMap(categoryMap));
    }
    getCategoriesMap();
}, []);
  return (
        <Routes>
          <Route index element={<CategoriesPreview/>} />
          <Route path=':category' element={<Category/>} />
        </Routes>
  );
};
