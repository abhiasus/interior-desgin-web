import React from "react";
import { Link } from "react-router-dom";

const img = (name) => new URL(`../assets/image/${name}`, import.meta.url).href;

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="container section-pad veda-empty">
        <span className="veda-eyebrow">YOUR SELECTION</span>
        <h1>Your cart is waiting.</h1>
        <p>Discover thoughtfully selected pieces for your home.</p>
        <Link to="/products" className="veda-button">Explore Collections</Link>
      </section>
    );
  }

  return (
    <section className="container section-pad">
      <div className="veda-page-heading" data-aos="fade-up">
        <span className="veda-eyebrow">YOUR SELECTION</span>
        <h1>A collection of <em>your favourites.</em></h1>
      </div>

      <div className="row g-5">
        <div className="col-lg-8">
          {cart.map((item) => (
            <article className="veda-cart-item" key={item.id}>
              <img src={img(item.image)} alt={item.name} />
              <div className="veda-cart-details">
                <span className="veda-eyebrow">{item.category}</span>
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString("en-IN")}</p>
                <div className="veda-quantity">
                  <button aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="veda-remove" onClick={() => removeFromCart(item.id)}>Remove item</button>
              </div>
              <strong className="veda-cart-line-total">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>
            </article>
          ))}
        </div>

        <div className="col-lg-4">
          <aside className="veda-order-summary">
            <span className="veda-eyebrow">ORDER SUMMARY</span>
            <h2>Your total</h2>
            <div className="veda-summary-line">
              <span>Items</span>
              <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="veda-summary-line">
              <span>Subtotal</span>
              <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
            </div>
            <p className="veda-summary-note">
              Delivery, installation and any applicable taxes will be confirmed
              during your enquiry.
            </p>
            <Link to="/contact" className="veda-button w-100 text-center">
              Enquire About My Order
            </Link>
            <Link to="/products" className="veda-continue-link">Continue shopping ↗</Link>
          </aside>
        </div>
      </div>
    </section>
  );
}