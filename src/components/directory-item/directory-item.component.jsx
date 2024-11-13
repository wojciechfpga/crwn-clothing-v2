import CategoryItem from "../category-item/category-item.component"
export default function DirectoryItem({categories}){

    return(
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>    
    )
}