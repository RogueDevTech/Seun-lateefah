"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.scss";

const weddingImages = [
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.03_PM_xmx8uq.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.04_PM_da6dzc.jpg",
  "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.22.05_PM_u0gcgz.jpg",
  // "https://res.cloudinary.com/dwozuizmv/image/upload/v1750763652/WhatsApp_Image_2025-06-24_at_10.10.28_AM_gntach.jpg",
  // "https://res.cloudinary.com/dwozuizmv/image/upload/v1750763652/WhatsApp_Image_2025-06-24_at_10.10.27_AM_c03ffi.jpg",
  // "https://res.cloudinary.com/dwozuizmv/image/upload/v1750763652/WhatsApp_Image_2025-06-24_at_10.10.32_AM_zaq2g3.jpg",
  // "https://res.cloudinary.com/dwozuizmv/image/upload/v1750763652/WhatsApp_Image_2025-06-24_at_10.10.31_AM_k3gq3p.jpg",
  // "https://res.cloudinary.com/dwozuizmv/image/upload/v1750763652/WhatsApp_Image_2025-06-24_at_10.10.30_AM_krfrvk.jpg",
];

const IMAGE_WIDTH = 0.35 * window.innerWidth; // 35vw in px
const IMAGES_COUNT = weddingImages.length;
const TOTAL_WIDTH = IMAGE_WIDTH * IMAGES_COUNT;

export default function WeddingHomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Force re-render on resize to recalculate IMAGE_WIDTH
      setScrollPosition((prev) => prev);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        // When the scroll reaches the width of one set, reset to 0
        if (prev >= TOTAL_WIDTH) {
          return 0;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.weddingHomepage}>
      {/* Navigation */}
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

      {/* Hero Scrolling Section */}
      <section className={styles.heroSection}>
        <div className={styles.scrollContainer}>
          <motion.div
            className={styles.scrollTrack}
            animate={{ x: -scrollPosition }}
            transition={{ duration: 0.05, ease: "linear" }}
          >
            {/* Duplicate images multiple times for seamless loop */}
            {[
              ...weddingImages,
              ...weddingImages,
              ...weddingImages,
              ...weddingImages,
            ].map((image, index) => (
              <div
                key={index}
                className={styles.scrollImage}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className={styles.overlay}>
                  <div className={styles.heroContent}>
                    <h1 className={styles.mainTitle}>We're Getting Married</h1>
                    {/* <div className={styles.coupleNames}>
                      <h2>Oluwaseun Yusuf</h2>
                      <span className={styles.andText}>&amp;</span>
                      <h2>Lateefah Abdulrahman</h2>
                    </div> */}
                    {/* <p className={styles.hashtag}>#SeunWedsLateefah</p> */}
                    {/* <div className={styles.dates}>
                      <p>
                        <b>Traditional:</b> 27th June 2025, 4PM
                        <br />
                        Lane 3, Workers Village, Zone 8, Lokoja, Kogi State
                      </p>
                      <p>
                        <b>Nikkah:</b> 28th June 2025, 10AM
                        <br />
                        Secretariate Mosque, Zone 8, Lokoja, Kogi State
                      </p>
                      <p>
                        <b>Reception:</b> 28th June 2025, 11AM
                        <br />
                        Ayonete Hotel, Zone 8 Junction, Lokoja, Kogi State
                      </p>
                    </div>
                    <div className={styles.rsvpBox}>
                      <span>
                        <b>RSVP:</b> Zubaidah (+234 810 301 8303), Tosin (+234
                        901 437 1462)
                      </span>
                    </div> */}
                    <Link href="/rsvp" className={styles.rsvpButton}>
                      RSVP
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
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
              <div className={styles.storyText}>
                <p className={styles.flag}>🇨🇮</p>
                <p>
                  Tout a commencé lors d&apos;une fête de remise des diplômes…
                  aujourd&apos;hui, c&apos;est pour la vie 🎓❤️
                </p>
                <p>
                  Notre histoire a débuté lors d&apos;une fête de remise des
                  diplômes organisée par un ami commun sur le campus. Bien que
                  nous ne nous connaissions pas encore, ce jour-là a tout
                  changé. Il est venu me parler, et nous avons passé la soirée à
                  discuter et danser.
                </p>
                <p>
                  Quelques jours plus tard, nous avons eu notre tout premier
                  rendez-vous — une partie de bowling — et il est vite devenu
                  évident que quelque chose de spécial nous unissait. Depuis,
                  nous avons partagé de nombreuses aventures, étudié côte à
                  côte, et grandi ensemble.
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
