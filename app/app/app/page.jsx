"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">NASEVA<span>®</span></a>

        <div className="nav-links">
          <a href="#collection">COLLECTION</a>
          <a href="#story">OUR STORY</a>
          <a href="#contact">CONTACT</a>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#collection" onClick={() => setMenuOpen(false)}>COLLECTION</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>OUR STORY</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
          </div>
        )}
      </nav>

      <section className="hero">
        <div className="hero-top">
          <span>INDEPENDENT LUXURY STREETWEAR</span>
          <span>EST. 2026 — COLLECTION 001</span>
        </div>

        <div className="hero-center">
          <p className="eyebrow">BEYOND THE ORDINARY.</p>
          <h1>NASEVA</h1>
          <p className="hero-description">
            WHERE LUXURY MEETS THE STREETS.
          </p>
          <a href="#collection" className="hero-button">
            EXPLORE COLLECTION <span>↗</span>
          </a>
        </div>

        <div className="hero-bottom">
          <span>DESIGNED TO STAND APART.</span>
          <span>01 / 03</span>
        </div>
      </section>

      <section id="collection" className="collection">
        <p className="section-label">01 — THE COLLECTION</p>
        <h2>NOT MADE TO<br />BLEND IN.</h2>
        <p className="collection-description">
          A new perspective on contemporary luxury.
          Designed for those who define their own direction.
        </p>

        <div className="collection-grid">
          <article className="product-card">
            <div className="product-visual visual-one">
              <span>01</span>
              <p>NASEVA<br />ESSENTIALS</p>
            </div>
            <h3>THE SIGNATURE HOODIE</h3>
            <p>OVERSIZED FIT — COLLECTION 001</p>
          </article>

          <article className="product-card">
            <div className="product-visual visual-two">
              <span>02</span>
              <p>NASEVA<br />ATELIER</p>
            </div>
            <h3>THE URBAN JACKET</h3>
            <p>STRUCTURED SILHOUETTE — COLLECTION 001</p>
          </article>
        </div>
      </section>

      <section id="story" className="story">
        <p className="section-label">02 — OUR PHILOSOPHY</p>
        <h2>BEYOND<br />THE ORDINARY.</h2>
        <p>
          NASEVA is an expression of individuality.
          A meeting point between refined luxury and
          unapologetic street culture.
        </p>
      </section>

      <footer id="contact" className="footer">
        <h2>NASEVA<span>®</span></h2>
        <p>BEYOND THE ORDINARY.</p>
        <div>
          <span>COLLECTION 001 — 2026</span>
          <span>© NASEVA. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </main>
  );
}
