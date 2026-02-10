import "./Testimonials.css";
function Testimonials() {
  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-cards">
        <div className="testimonial">
          <p>
            “Fresh products and fast delivery. Loved the experience!”
          </p>
          <h4>- Anjali</h4>
        </div>

        <div className="testimonial">
          <p>
            “Best grocery website I’ve used so far.”
          </p>
          <h4>- Rahul</h4>
        </div>

        <div className="testimonial">
          <p>
            “Quality is amazing and prices are reasonable.”
          </p>
          <h4>- Sneha</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
