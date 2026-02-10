import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
const { cart, addToCart, increment, decrement,clearCart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = subtotal * 0.05; 
  const total = subtotal + gst;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>₹{item.price}</p>

        <button
          onClick={() => decrement(item.id)}
          disabled={item.quantity === 1}
        >-</button>

        <span> {item.quantity} </span>
        <button onClick={() => increment(item.id)}>+</button>

        <p>Total: ₹{item.price * item.quantity}</p>
        <hr />
        </div>
      ))}

      <h3>Subtotal: ₹{subtotal}</h3>
      <h3>GST (5%): ₹{gst.toFixed(2)}</h3>
      <h2>Grand Total: ₹{total.toFixed(2)}</h2>

      <button
  onClick={clearCart}
  disabled={cart.length === 0}
>
  Clear Cart
</button>

    </div>
  );
}

export default Cart;
