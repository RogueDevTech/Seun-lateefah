"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.scss";

const bridesmaids = [
  {
    id: 1,
    name: "Sa’adah Umar Farouq",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750776733/Screenshot_2025-06-24_at_3.47.04_PM_bpaiob.png",
    relationship: "Friend",
    description: "",
  },
  {
    id: 2,
    name: "Ameenah",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750776662/Screenshot_2025-06-24_at_3.48.26_PM_yhnxdo.png",
    relationship: "Friend",
    description: "",
  },
  {
    id: 3,
    name: "Sa’adah Yahaya",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750776734/Screenshot_2025-06-24_at_3.48.11_PM_nxu1jt.png",
    relationship: "Childhood Friend",
    description: "We've been inseparable since we were five years old.",
  },
  {
    id: 4,
    name: "Aisha Zubair",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750891831/Screenshot_2025-06-25_at_11.50.10_PM_hecfe1.png",
    relationship: "Friend",
    description: "",
  },
  {
    id: 5,
    name: "Comfort Onekata",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750776647/Screenshot_2025-06-24_at_3.47.33_PM_qmge6q.png",
    relationship: "Friend",
    description: "",
  },
  {
    id: 6,
    name: "Zubeidah Farouq",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dpy9rwwub/image/upload/v1750798215/zubeidah_bv0zb5.jpg",
    relationship: "Friend",
    description: "",
  },
  {
    id: 7,
    name: "Rahma",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dpy9rwwub/image/upload/v1750839960/Rahma_gtjduz.jpg",
    relationship: "Friend",
    description: "",
  },
  {
    id: 8,
    name: "Husseina",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dpy9rwwub/image/upload/v1750839946/Husseina_wzpehx.jpg",
    relationship: "Friend",
    description: "",
  },
  {
    id: 9,
    name: "Fateemah",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dpy9rwwub/image/upload/v1750840007/fateemah_fyhq2p.jpg",
    relationship: "Friend",
    description: "",
  },
  {
    id: 10,
    name: "Busola Yusuf",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dpy9rwwub/image/upload/v1750935308/Busola__Yusuf_tz2ash.jpg",
    relationship: "Friend",
    description: "",
  },
  {
    id: 11,
    name: "Mercy Ohiole",
    role: "Bridesmaid",
    image:
      "https://res.cloudinary.com/dpy9rwwub/image/upload/v1751101051/ohiole_dyw5uy.jpg",
    relationship: "Friend",
    description: "",
  },
];

const groomsmen = [
  {
    id: 1,
    name: "Tosin Yusuf",
    role: "Groomsman",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750776755/Screenshot_2025-06-24_at_3.51.39_PM_nu5d6f.png",
    relationship: "Brother of the Groom",
    description: "",
  },
  {
    id: 2,
    name: "Habeeb Abdulazeez",
    role: "Groomsman",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750776755/Screenshot_2025-06-24_at_3.51.19_PM_ahrdap.png",
    relationship: "College Friend",
    description: "",
  },
  {
    id: 3,
    name: "Mubarak Shittu",
    role: "Groomsman",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750891473/WhatsApp_Image_2025-06-25_at_11.40.52_PM_azxg25.jpg",
    relationship: "College Friend",
    description: "",
  },
  {
    id: 4,
    name: "Olaoluwa Yusuf",
    role: "Groomsman",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750776761/Screenshot_2025-06-24_at_3.50.59_PM_w4harc.png",
    relationship: "Brother",
    description: "",
  },
  {
    id: 5,
    name: "Kabir Mohammed",
    role: "Groomsman",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750772001/WhatsApp_Image_2025-06-24_at_2.26.20_PM_my4gq6.jpg",
    relationship: "College Friend",
    description: "",
  },
  {
    id: 6,
    name: "Taiwo Johnson",
    role: "Groomsman",
    image:
      "https://res.cloudinary.com/dpy9rwwub/image/upload/v1750797795/taiwo_oyw3qv.jpg",
    relationship: "College Friend",
    description: "",
  },
  {
    id: 8,
    name: "Busayo Omoyajowo",
    role: "Groomsman",
    image:
      "https://res.cloudinary.com/dpy9rwwub/image/upload/v1750798204/busayo_bglixf.jpg",
    relationship: "College Friend",
    description: "",
  },
  {
    id: 9,
    name: "Emmanuel Dada",
    role: "Groomsman",
    image:
      "https://res.cloudinary.com/dpy9rwwub/image/upload/v1750861907/dada_zxicqk.jpg",
    relationship: "College Friend",
    description: "",
  },
  {
    id: 10,
    name: "Fowomola Jamiu",
    role: "Groomsman",
    image:
      "https://res.cloudinary.com/dwozuizmv/image/upload/v1750892309/WhatsApp_Image_2025-06-25_at_11.56.44_PM_tktr7x.jpg",
    relationship: "College Friend",
    description: "",
  },
];

export default function WeddingPartyPage() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof bridesmaids)[0] | (typeof groomsmen)[0] | null
  >(null);

  const openLightbox = (
    member: (typeof bridesmaids)[0] | (typeof groomsmen)[0]
  ) => {
    setSelectedMember(member);
  };

  const closeLightbox = () => {
    setSelectedMember(null);
  };

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
                <div
                  className={styles.memberImage}
                  onClick={() => openLightbox(bridesmaid)}
                >
                  <div
                    className={styles.imagePlaceholder}
                    style={{ backgroundImage: `url(${bridesmaid.image})` }}
                  />
                  <div className={styles.roleBadge}>{bridesmaid.role}</div>
                  <div className={styles.imageOverlay}>
                    <span>Click to view</span>
                  </div>
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
                <div
                  className={styles.memberImage}
                  onClick={() => openLightbox(groomsman)}
                >
                  <div
                    className={styles.imagePlaceholder}
                    style={{ backgroundImage: `url(${groomsman.image})` }}
                  />
                  <div className={styles.roleBadge}>{groomsman.role}</div>
                  <div className={styles.imageOverlay}>
                    <span>Click to view</span>
                  </div>
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={closeLightbox}
          >
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeLightbox}>
                ×
              </button>

              <div className={styles.lightboxImage}>
                <div
                  className={styles.imageDisplay}
                  style={{ backgroundImage: `url(${selectedMember.image})` }}
                />
                <div className={styles.imageCaption}>
                  <h3>{selectedMember.name}</h3>
                  <p className={styles.role}>{selectedMember.role}</p>
                  <p className={styles.relationship}>
                    {selectedMember.relationship}
                  </p>
                  {selectedMember.description && (
                    <p className={styles.description}>
                      {selectedMember.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
