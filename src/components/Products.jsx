import React, { useMemo, useState } from "react";
import { ProductCard } from "./Home";

export default function Products({ products, addToCart }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filtered = useMemo(() => products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [products, category, search]);

  return (
    <>
      <section className="veda-page-hero">
        <div className="container" data-aos="fade-up">
          <span className="veda-eyebrow">THE VEDA COLLECTION</span>
          <h1>Made with care.<br /><em>Chosen with purpose.</em></h1>
          <p>Explore furniture, lighting, decor and interiors inspired by heritage craftsmanship.</p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="veda-shop-toolbar">
          <div>
            <span className="veda-eyebrow">OUR COLLECTIONS</span>
            <h2>Find your favourite pieces</h2>
            <p>{filtered.length} items to explore</p>
          </div>
          <input
            className="veda-search"
            type="search"
            placeholder="Search the collection..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search products"
          />
        </div>

        <div className="veda-filter-list">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`veda-filter ${category === item ? "active" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="veda-empty">
            <h3>No matching products</h3>
            <p>Try another search or category.</p>
            <button className="veda-button" onClick={() => { setCategory("All"); setSearch(""); }}>
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}