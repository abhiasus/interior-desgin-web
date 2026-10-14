import React from "react";
import { Link } from "react-router-dom";

const img = (name) => new URL(`../assets/image/${name}`, import.meta.url).href;

export default function About() {
  return (
    <>
      <section className="veda-page-hero">
        <div className="container" data-aos="fade-up">
          <span className="veda-eyebrow">OUR STORY</span>
          <h1>Honouring the past.<br /><em>Designing for today.</em></h1>
          <p>Interiors inspired by South Indian heritage and the beauty of natural materials.</p>
        </div>
      </section>

      <section className="container section-pad">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <img className="veda-about-image" src={img("living-room.jpg")} alt="Heritage living room" />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <span className="veda-eyebrow">THE VEDA PHILOSOPHY</span>
            <h2>Design that feels <em>personal.</em></h2>
            <p>
              Veda Heritage Interiors celebrates the character of South Indian
              homes: the warmth of teak, the glow of brass, earthy textures,
              and spaces made for togetherness.
            </p>
            <p>
              Our approach combines heritage-inspired details with modern
              comfort. Each space is thoughtfully composed to feel welcoming,
              functional, and enduring.
            </p>
            <Link to="/products" className="veda-button">Explore Our Collections</Link>
          </div>
        </div>
      </section>

      <section className="veda-values section-pad">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="veda-eyebrow">WHAT GUIDES US</span>
            <h2>Our design principles</h2>
          </div>
          <div className="row g-4">
            {[
              ["01", "Honest Materials", "Natural wood, brass, stone and tactile fabrics that age beautifully."],
              ["02", "Rooted Craft", "Traditional details that celebrate the skill and care behind every piece."],
              ["03", "Everyday Comfort", "Spaces that look beautiful and work naturally for daily life."],
            ].map(([number, title, text]) => (
              <div className="col-md-4" key={number} data-aos="fade-up">
                <article className="veda-value-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2" data-aos="fade-left">
            <img className="veda-about-image" src={img("pooja-room.jpg")} alt="Traditional devotional interior" />
          </div>
          <div className="col-lg-6 order-lg-1" data-aos="fade-right">
            <span className="veda-eyebrow">DESIGNED AROUND YOU</span>
            <h2>Your space should tell <em>your story.</em></h2>
            <p>
              From one carefully chosen accent piece to an entire room,
              we believe the best interiors reflect the people who live in them.
            </p>
            <Link to="/contact" className="veda-button">Talk to Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}