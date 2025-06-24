"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.scss";

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guests: 1,
    dietaryRestrictions: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.rsvpPage}>
        <nav className={styles.navigation}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <Link href="/">
                <h2>Oluwaseun & Lateefah</h2>
              </Link>
            </div>
            <div className={styles.navLinks}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="/wedding-party" className={styles.navLink}>
                Wedding Party
              </Link>
              <Link href="/gallery" className={styles.navLink}>
                Gallery
              </Link>
              <Link
                href="/rsvp"
                className={`${styles.navLink} ${styles.active}`}
              >
                RSVP
              </Link>
            </div>
          </div>
        </nav>

        <section className={styles.successSection}>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.successContent}
            >
              <div className={styles.successIcon}>✓</div>
              <h1>Thank You!</h1>
              <p>
                Your RSVP has been successfully submitted. We can't wait to
                celebrate with you!
              </p>
              <Link href="/" className={styles.backButton}>
                Back to Home
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.rsvpPage}>
      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <h2>Oluwaseun & Lateefah</h2>
            </Link>
          </div>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/wedding-party" className={styles.navLink}>
              Wedding Party
            </Link>
            <Link href="/gallery" className={styles.navLink}>
              Gallery
            </Link>
            <Link href="/rsvp" className={`${styles.navLink} ${styles.active}`}>
              RSVP
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            RSVP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Please let us know if you can join us on our special day
          </motion.p>
        </div>
      </section>

      {/* RSVP Form Section */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.formContainer}
          >
            <div className={styles.formHeader}>
              <h2>Will you attend?</h2>
              <p>Please respond by December 1st, 2025</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.rsvpForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="attending">Will you attend? *</label>
                  <select
                    id="attending"
                    name="attending"
                    value={formData.attending}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Please select...</option>
                    <option value="yes">Yes, I will attend</option>
                    <option value="no">No, I cannot attend</option>
                  </select>
                </div>
              </div>

              {formData.attending === "yes" && (
                <>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="guests">Number of Guests</label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                      >
                        <option value={1}>1 Guest</option>
                        <option value={2}>2 Guests</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4 Guests</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="dietaryRestrictions">
                        Dietary Restrictions
                      </label>
                      <input
                        type="text"
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleInputChange}
                        placeholder="Any dietary restrictions?"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share a message or special request..."
                  rows={4}
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send RSVP
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className={styles.eventDetailsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.eventDetails}
          >
            <h2>Event Details</h2>
            <div className={styles.events}>
              <div className={styles.event}>
                <h3>Ceremony & Reception</h3>
                <p className={styles.date}>December 20, 2025</p>
                <p className={styles.time}>4:00 PM - 11:00 PM</p>
                <p className={styles.location}>Abidjan, Côte d'Ivoire</p>
                <p className={styles.venue}>Grand Hotel Abidjan</p>
              </div>
              <div className={styles.event}>
                <h3>Reception</h3>
                <p className={styles.date}>December 27, 2025</p>
                <p className={styles.time}>6:00 PM - 12:00 AM</p>
                <p className={styles.location}>Lagos, Nigeria</p>
                <p className={styles.venue}>Eko Hotel & Suites</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
