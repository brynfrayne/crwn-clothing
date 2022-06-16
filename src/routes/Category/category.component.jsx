import './category.styles.jsx';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, Title } from './category.styles.jsx';

export default function Category() {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

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