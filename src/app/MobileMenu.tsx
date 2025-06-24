"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./page.module.scss";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener("resize", close);
      return () => window.removeEventListener("resize", close);
    }
  }, [menuOpen]);

  return (
    <>
      {/* Hamburger menu button (mobile only) */}
      <button className={styles.menuButton} onClick={() => setMenuOpen(true)}>
        <FiMenu size={32} />
      </button>
      {/* Animated mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setMenuOpen(false)}
              >
                <FiX size={32} />
              </button>
              <nav className={styles.mobileNavLinks}>
                <Link
                  href="/"
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/wedding-party"
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Wedding Party
                </Link>
                <Link
                  href="/gallery"
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/rsvp"
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  RSVP
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
