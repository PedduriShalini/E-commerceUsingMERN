import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Grocery</h3>
        <p>Fresh groceries delivered at your doorstep.</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <p>Home</p>
        <p>Shop</p>
        <p>Cart</p>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: info@gmail.com</p>
        <p>Phone: +800 1234 5678</p>
      </div>
    </footer>
  );
}

export default Footer;
