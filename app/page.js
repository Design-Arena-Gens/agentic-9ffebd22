'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🐾</span>
          <span className={styles.logoText}>PetWorld</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Your Pet's <span className={styles.highlight}>World</span> of Care
            </h1>
            <p className={styles.heroSubtitle}>
              Connect with trusted veterinarians, groomers, and pet sitters. Everything your furry friend needs, all in one place.
            </p>
            <form onSubmit={handleSubmit} className={styles.emailForm}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.ctaButton}>
                Get Early Access
              </button>
            </form>
            {submitted && <p className={styles.successMessage}>Thanks! We'll be in touch soon! 🎉</p>}
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageCircle}>
              <span className={styles.petEmoji}>🐕</span>
              <span className={styles.petEmoji}>🐈</span>
              <span className={styles.petEmoji}>🐦</span>
              <span className={styles.petEmoji}>🐰</span>
            </div>
          </div>
        </section>

        <section id="features" className={styles.features}>
          <h2 className={styles.sectionTitle}>Why Choose PetWorld?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏥</div>
              <h3>Vet Connect</h3>
              <p>24/7 access to licensed veterinarians for consultations and emergency care</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✂️</div>
              <h3>Grooming</h3>
              <p>Book professional grooming services with verified pet care specialists</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏠</div>
              <h3>Pet Sitting</h3>
              <p>Find trusted pet sitters and boarding options when you're away</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Health Tracking</h3>
              <p>Monitor your pet's health, vaccinations, and medical records in one app</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛒</div>
              <h3>Pet Store</h3>
              <p>Shop premium pet food, toys, and supplies delivered to your door</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3>Community</h3>
              <p>Connect with other pet owners and share tips, photos, and stories</p>
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <h2 className={styles.sectionTitle}>Built by Pet Lovers, For Pet Lovers</h2>
          <p className={styles.aboutText}>
            PetWorld is revolutionizing pet care by bringing together everything pet owners need in a single, easy-to-use platform.
            Our mission is to make pet care accessible, affordable, and stress-free for every pet parent.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Pets Cared For</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Verified Providers</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4.9★</div>
              <div className={styles.statLabel}>Average Rating</div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to Join PetWorld?</h2>
          <p className={styles.ctaText}>Be among the first to experience the future of pet care</p>
          <button className={styles.ctaButtonLarge} onClick={() => document.querySelector(`.${styles.emailInput}`).focus()}>
            Join the Waitlist
          </button>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <span className={styles.logoIcon}>🐾</span>
            <span className={styles.logoText}>PetWorld</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>
          <p className={styles.copyright}>© 2025 PetWorld. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
