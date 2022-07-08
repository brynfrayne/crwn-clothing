import './category.styles.jsx';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';
import { useState, useEffect, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, Title } from './category.styles.jsx';

export default function Category() {
    const { category } = useParams();
    console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);


    useEffect(() => {
        console.log('effect fired calling setProducts')
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products && 
                    products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
            </CategoryContainer>
        </Fragment>
    )

}