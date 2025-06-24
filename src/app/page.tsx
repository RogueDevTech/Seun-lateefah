"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import styles from "./page.module.scss";

const weddingImages = [
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.03_PM_xmx8uq.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750772779/WhatsApp_Image_2025-06-24_at_2.37.04_PM_tjmdct.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.04_PM_da6dzc.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.05_PM_u0gcgz.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.03_PM_xmx8uq.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.04_PM_da6dzc.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.05_PM_u0gcgz.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.03_PM_xmx8uq.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.04_PM_da6dzc.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.05_PM_u0gcgz.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.03_PM_xmx8uq.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.04_PM_da6dzc.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.05_PM_u0gcgz.jpg",
];

export default function WeddingHomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    // Only runs on client
    const handleResize = () => {
      const width = 0.35 * window.innerWidth;
      setImageWidth(width);
      setTotalWidth(width * weddingImages.length);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!imageWidth || !totalWidth) return;
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 2;
        // When we reach the end of the first set, reset to beginning seamlessly
        if (newPosition >= totalWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [imageWidth, totalWidth]);

  return (
    <div className={styles.weddingHomepage}>
      {/* Header (hidden on mobile) */}
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <h2>Oluwaseun & Lateefah</h2>
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
            <Link href="/rsvp" className={styles.navLink}>
              RSVP
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu />

      {/* Hero Scrolling Section */}
      <section className={styles.heroSection}>
        <div className={styles.scrollContainer}>
          <motion.div
            className={styles.scrollTrack}
            animate={{ x: -scrollPosition }}
            transition={{ duration: 0.05, ease: "linear" }}
            style={{
              width: `${totalWidth * 2}px`,
              display: "flex",
            }}
          >
            {/* First set of images */}
            {weddingImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className={styles.scrollImage}
                style={{
                  backgroundImage: `url(${image})`,
                  width: `${imageWidth}px`,
                  flexShrink: 0,
                }}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {weddingImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className={styles.scrollImage}
                style={{
                  backgroundImage: `url(${image})`,
                  width: `${imageWidth}px`,
                  flexShrink: 0,
                }}
              />
            ))}
          </motion.div>
          {/* Single overlay above all images */}
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.mainTitle}>We&apos;re Getting Married</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Love Story Section */}
      <section className={styles.loveStorySection}>
        <div className={styles.container}>
          <motion.div
            className={styles.loveStory}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Love Story</h2>
            <div className={styles.storyContent}>
              <div className={styles.storyText}>
                <p className={styles.flag}>🇳🇬</p>
                <p>
                  It all started at a graduation party... now we&apos;re
                  graduating to forever 🎓❤️
                </p>
                <p>
                  Our journey began when we met at a mutual friend&apos;s
                  graduation party on campus. Though we didn&apos;t know each
                  other at the time, that day changed everything. He approached
                  me, and we spent the evening talking and dancing. A few days
                  later, we went on our first date—bowling—and it quickly became
                  clear that we had a special connection.
                </p>
                <p>
                  From that point on, we shared countless adventures, studied
                  side by side, and grew together. Three years later, on
                  September 1st, 2024, we got engaged. It was a romantic evening
                  in the park by the water, and when he popped the question, I
                  said yes! Now, we&apos;re excited to take the next step and
                  begin our forever together—and we would be honored to have you
                  celebrate with us.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={styles.quickLinksSection}>
        <div className={styles.container}>
          <div className={styles.quickLinks}>
            <Link href="/wedding-party" className={styles.quickLink}>
              <div className={styles.quickLinkContent}>
                <h3>Wedding Party</h3>
                <p>Meet our bridesmaids and groomsmen</p>
              </div>
            </Link>
            <Link href="/gallery" className={styles.quickLink}>
              <div className={styles.quickLinkContent}>
                <h3>Gallery</h3>
                <p>Our special moments together</p>
              </div>
            </Link>
            <Link href="/rsvp" className={styles.quickLink}>
              <div className={styles.quickLinkContent}>
                <h3>RSVP</h3>
                <p>Let us know if you can make it</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
