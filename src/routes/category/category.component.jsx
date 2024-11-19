import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  // Asynchroniczny useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      if (categoriesMap[category]) {
        setProducts(categoriesMap[category]);
      } else {
        // Możesz tutaj dodać logikę ładowania danych, np. z API
        // await fetchSomeData(category);
        setProducts([]); // Wstaw pustą tablicę lub inne dane w przypadku braku
      }
    };
    fetchProducts();
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Brak produktów do wyświetlenia.</p>
        )}
      </div>
    </Fragment>
  );
};

export default Category;
