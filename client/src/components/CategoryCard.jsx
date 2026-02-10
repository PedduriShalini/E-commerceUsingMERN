function CategoryCard({ category, onClick }) {

  const handleClick = () => {
    onClick(category.name);
  };

  return (
    <div className="category-card" onClick={handleClick}>

      <div className="category-image-box">
        <img src={category.image} alt={category.name} />
      </div>

      <h3>{category.name}</h3>

    </div>
  );
}

export default CategoryCard;
