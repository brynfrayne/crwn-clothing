import CategoryItem from "../Category-item/category-item.component";
import './directory.styles.scss';

const Categories = ({categories}) => {
    
    return (
    <div className="directory-container">
      {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
      ))}
    </div>  
    )
}
export default Categories;