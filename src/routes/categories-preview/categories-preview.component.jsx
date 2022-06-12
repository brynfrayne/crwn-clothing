import { Fragment, useContext } from 'react';
import { CategoryPreview } from '../../components/category-preview/category-preview.component';
import { CategoriesContext } from '../../context/categories.context';


export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  // const slicedCategoriesMap = categoriesMap.slice(0, 4)
  
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  );
};
