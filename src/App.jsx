import React, { useEffect, useState } from "react";
import AOS from "aos";
import { NavLink, Route, Routes, Link, useLocation } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

const logo = `${import.meta.env.BASE_URL}logo.png`;

const products = [
  { id: 1, name: "Heritage Teak Sofa", category: "Furniture", price: 68500, image: "wooden-sofa.jpg", description: "Handcrafted teak wood with timeless detailing." },
  { id: 2, name: "Carved Coffee Table", category: "Furniture", price: 18500, image: "coffee-table.jpg", description: "Traditional craftsmanship with a rich wood finish." },
  { id: 3, name: "Antique Brass Lamp", category: "Lighting", price: 4500, image: "brass-lamp.jpg", description: "Warm brass lighting inspired by South Indian homes." },
  { id: 4, name: "Heritage Cabinet", category: "Furniture", price: 32500, image: "wooden-cabinet.jpg", description: "A statement storage piece in natural teak." },
  { id: 5, name: "Classic Dining Table", category: "Furniture", price: 42500, image: "dining-table.jpg", description: "A gathering place designed for generations." },
  { id: 6, name: "Earthtone Accent Chair", category: "Seating", price: 14500, image: "accent-chair.jpg", description: "Comfortable seating with a warm traditional palette." },
  { id: 7, name: "Carved Wall Mirror", category: "Decor", price: 7800, image: "wall-mirror.jpg", description: "Ornamental framing inspired by heritage interiors." },
  { id: 8, name: "Terracotta Decor Vase", category: "Decor", price: 2200, image: "decor-vase.jpg", description: "An earthy accent for consoles and shelves." },
  { id: 9, name: "Traditional Bookshelf", category: "Furniture", price: 21900, image: "bookshelf.jpg", description: "Solid wood shelving with understated detailing." },
  { id: 10, name: "Teak Side Table", category: "Furniture", price: 6900, image: "side-table.jpg", description: "A compact accent table for everyday living." },
  { id: 11, name: "Brass Heritage Chandelier", category: "Lighting", price: 18500, image: "chandelier.jpg", description: "A warm focal point for dining and living spaces." },
  { id: 12, name: "Heritage Living Room", category: "Interiors", price: 125000, image: "living-room.jpg", description: "A curated traditional living room design package." },
  { id: 13, name: "Serene Heritage Bedroom", category: "Interiors", price: 110000, image: "bedroom.jpg", description: "Natural wood and soothing tones for restful spaces." },
  { id: 14, name: "Classic Dining Interior", category: "Interiors", price: 95000, image: "dining-room.jpg", description: "A welcoming dining space with traditional character." },
  { id: 15, name: "Sacred Pooja Interior", category: "Interiors", price: 55000, image: "pooja-room.jpg", description: "A serene devotional space with wood detailing." },
];

function Navbar({ count }) {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg veda-navbar">
      <div className="container">
        <Link className="navbar-brand veda-brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="Veda Heritage Interiors" />
          <span>
            <strong>VEDA HERITAGE</strong>
            <small>INTERIORS & LIVING</small>
          </span>
        </Link>

        <button
          className="navbar-toggler veda-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <div className="navbar-nav ms-auto align-items-lg-center">
            <NavLink end to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>Our Story</NavLink>
            <NavLink to="/products" className="nav-link" onClick={closeMenu}>Collections</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
            <NavLink to="/cart" className="nav-link veda-cart-link" onClick={closeMenu}>
              Cart <span className="cart-count">{count}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="veda-footer">
      <div className="container">
        <div className="row g-4 text-start">
          <div className="col-lg-5 col-md-6">
            <h3>Veda Heritage Interiors</h3>
            <p>
              Rooted in tradition. Crafted for modern living.
              Discover the warmth of South Indian craftsmanship.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5>Explore</h5>
            <Link to="/about">Our Story</Link>
            <Link to="/products">Collections</Link>
            <Link to="/contact">Design Consultation</Link>
          </div>
          <div className="col-lg-4">
            <h5>Our Philosophy</h5>
            <p>Natural materials, thoughtful details, and interiors made to last.</p>
          </div>
        </div>
        <div className="veda-footer-bottom">
          © {new Date().getFullYear()} Veda Heritage Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const t = setTimeout(() => AOS.refreshHard(), 60);
    return () => clearTimeout(t);
  }, [location.pathname]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((current) =>
      quantity <= 0
        ? current.filter((item) => item.id !== id)
        : current.map((item) => item.id === id ? { ...item, quantity } : item)
    );
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar count={count} />

      <main className="veda-main">
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home products={products} addToCart={addToCart} />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}