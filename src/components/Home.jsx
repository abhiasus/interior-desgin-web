import React from "react";
import { Link } from "react-router-dom";

const img = (name) => new URL(`../assets/image/${name}`, import.meta.url).href;

function ProductCard({ product, addToCart }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <article className="veda-product-card">
        <Link to="/products" className="veda-product-image">
          <img src={img(product.image)} alt={product.name} loading="lazy" />
          <span className="veda-product-tag">{product.category}</span>
        </Link>
        <div className="veda-product-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <strong>₹{product.price.toLocaleString("en-IN")}</strong>
            <button className="veda-small-button" onClick={() => addToCart(product)}>
              Add +
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export { ProductCard };

export default function Home({ products, addToCart }) {
  return (
    <>
      <section className="veda-hero container" data-aos="fade-up">
        <div className="row align-items-center g-0">
          <div className="col-lg-5 veda-hero-copy">
            <span className="veda-eyebrow">THE ART OF INDIAN LIVING</span>
            <h1>Tradition woven into <em>every space.</em></h1>
            <p>
              Discover the soul of South Indian interiors through rich teak,
              handcrafted details, antique brass, and timeless design.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/products" className="veda-button">Explore Collections</Link>
              <Link to="/about" className="veda-text-link">Our Story ↗</Link>
            </div>
            <div className="veda-hero-note">
              <span>✦</span> Crafted with character. Designed to endure.
            </div>
          </div>
          <div className="col-lg-7">
            <div className="veda-hero-image">
              <img src={img("hero.jpg")} alt="Traditional South Indian luxury interior" />
              <div className="veda-image-caption">
                <span>01 / HERITAGE COLLECTION</span>
                <strong>Warmth that feels like home.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="veda-intro section-pad">
        <div className="container text-center" data-aos="fade-up">
          <span className="veda-eyebrow">ROOTED IN CRAFT</span>
          <h2>Spaces with a <em>sense of belonging.</em></h2>
          <p className="veda-section-description">
            Inspired by the homes, materials, and craftsmanship of South India,
            we bring together traditional beauty and thoughtful comfort.
          </p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="veda-section-heading" data-aos="fade-up">
          <div>
            <span className="veda-eyebrow">EXPLORE OUR WORLD</span>
            <h2>Collections with character</h2>
          </div>
          <Link to="/products" className="veda-text-link">View all collections ↗</Link>
        </div>

        <div className="row g-4">
          {[
            { name: "Living, Naturally", image: "living-room.jpg", text: "Gather, relax, and feel at home." },
            { name: "Restful Retreats", image: "bedroom.jpg", text: "Quiet spaces with natural warmth." },
            { name: "The Art of Gathering", image: "dining-room.jpg", text: "Make every meal meaningful." },
          ].map((item, index) => (
            <div className="col-md-4" key={item.name} data-aos="fade-up" data-aos-delay={index * 100}>
              <Link to="/products" className="veda-category-card">
                <img src={img(item.image)} alt={item.name} loading="lazy" />
                <div>
                  <span>0{index + 1}</span>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                  <b>Discover ↗</b>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="veda-featured section-pad">
        <div className="container">
          <div className="veda-section-heading" data-aos="fade-up">
            <div>
              <span className="veda-eyebrow">THOUGHTFULLY SELECTED</span>
              <h2>Pieces to treasure</h2>
            </div>
            <Link to="/products" className="veda-text-link">Shop all pieces ↗</Link>
          </div>
          <div className="row g-4">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <div className="veda-pooja-banner" data-aos="zoom-in">
          <img src={img("pooja-room.jpg")} alt="Traditional pooja room with warm wood details" loading="lazy" />
          <div className="veda-pooja-overlay">
            <span className="veda-eyebrow">MADE FOR MEANINGFUL MOMENTS</span>
            <h2>A corner for calm.<br /><em>A space for tradition.</em></h2>
            <p>Discover serene interiors inspired by timeless South Indian homes.</p>
            <Link to="/products" className="veda-button">Explore the Collection</Link>
          </div>
        </div>
      </section>

      <section className="veda-consultation">
        <div className="container text-center" data-aos="fade-up">
          <span className="veda-eyebrow">YOUR HOME, YOUR STORY</span>
          <h2>Let's create something <em>meaningful.</em></h2>
          <p>Tell us about your space and let our team help bring your vision to life.</p>
          <Link to="/contact" className="veda-button veda-button-light">Book a Consultation ↗</Link>
        </div>
      </section>
    </>
  );
}