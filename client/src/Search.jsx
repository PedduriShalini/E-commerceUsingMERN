function Search() {
return(
 <div className="hero-section2">
        <h1 className="main-title">Grocery</h1>
        <div className="center-terms">
        <input type="search" id="search-bar" placeholder="Search for fresh fruits, veggies, products..."/>
        </div>
        <div className="right-terms">
        <span className="wishlist">Your Wishlist</span>
        <span className="cart-items">Your Cart</span>
        </div>
      </div>
 );
}
export default Search;