import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from './directory.styles.jsx';

const Categories = ({categories}) => {
    
    return (
    <DirectoryContainer>
      {categories.map((category) => (
          <DirectoryItem key={category.id} category={category}/>
      ))}
    </DirectoryContainer>  
    )
}
export default Categories;