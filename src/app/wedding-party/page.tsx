"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.scss";

const bridesmaids = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Maid of Honor",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    relationship: "Sister of the Bride",
    description: "My dearest sister and best friend since childhood.",
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Bridesmaid",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    relationship: "College Roommate",
    description: "The one who kept me sane during all-night study sessions.",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Bridesmaid",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    relationship: "Childhood Friend",
    description: "We've been inseparable since we were five years old.",
  },
  {
    id: 4,
    name: "Jessica Kim",
    role: "Bridesmaid",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    relationship: "Work Colleague",
    description: "The friend who makes every workday feel like a party.",
  },
];

const groomsmen = [
  {
    id: 1,
    name: "Michael Thompson",
    role: "Best Man",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    relationship: "Brother of the Groom",
    description: "My brother and partner in crime since day one.",
  },
  {
    id: 2,
    name: "David Wilson",
    role: "Groomsman",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    relationship: "College Friend",
    description: "The friend who introduced me to the love of my life.",
  },
  {
    id: 3,
    name: "James Brown",
    role: "Groomsman",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    relationship: "Childhood Friend",
    description: "We've been through everything together since kindergarten.",
  },
  {
    id: 4,
    name: "Robert Davis",
    role: "Groomsman",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    relationship: "Work Friend",
    description: "The colleague who became family over coffee breaks.",
  },
];

export default function WeddingPartyPage() {
  return (
    <div className={styles.weddingPartyPage}>
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
            <Link
              href="/wedding-party"
              className={`${styles.navLink} ${styles.active}`}
            >
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

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            Wedding Party
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Meet the amazing people who will be standing by our side on our
            special day
          </motion.p>
        </div>
      </section>

      {/* Bridesmaids Section */}
      <section className={styles.bridesmaidsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Bridesmaids</h2>
            <p>The beautiful ladies who will be by Lateefah&apos;s side</p>
          </motion.div>

          <div className={styles.partyGrid}>
            {bridesmaids.map((bridesmaid, index) => (
              <motion.div
                key={bridesmaid.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.partyMember}
              >
                <div className={styles.memberImage}>
                  <div
                    className={styles.imagePlaceholder}
                    style={{ backgroundImage: `url(${bridesmaid.image})` }}
                  />
                  <div className={styles.roleBadge}>{bridesmaid.role}</div>
                </div>
                <div className={styles.memberInfo}>
                  <h3>{bridesmaid.name}</h3>
                  <p className={styles.relationship}>
                    {bridesmaid.relationship}
                  </p>
                  <p className={styles.description}>{bridesmaid.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Groomsmen Section */}
      <section className={styles.groomsmenSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Groomsmen</h2>
            <p>The handsome gentlemen who will be by Oluwaseun&apos;s side</p>
          </motion.div>

          <div className={styles.partyGrid}>
            {groomsmen.map((groomsman, index) => (
              <motion.div
                key={groomsman.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.partyMember}
              >
                <div className={styles.memberImage}>
                  <div
                    className={styles.imagePlaceholder}
                    style={{ backgroundImage: `url(${groomsman.image})` }}
                  />
                  <div className={styles.roleBadge}>{groomsman.role}</div>
                </div>
                <div className={styles.memberInfo}>
                  <h3>{groomsman.name}</h3>
                  <p className={styles.relationship}>
                    {groomsman.relationship}
                  </p>
                  <p className={styles.description}>{groomsman.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2>Ready to Celebrate?</h2>
            <p>
              Join us for our special day and create memories that will last a
              lifetime
            </p>
            <Link href="/rsvp" className={styles.ctaButton}>
              RSVP Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
