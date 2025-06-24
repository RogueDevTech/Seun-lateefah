"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.scss";
import { FiPhone } from "react-icons/fi";

export default function RSVPPage() {
  // RSVP contacts
  const rsvpContacts = [
    { name: "Zubaidah", phone: "+2348103018303" },
    { name: "Tosin", phone: "+2349014371462" },
  ];

  //   if (isSubmitted) {
  //     return (
  //       <div className={styles.rsvpPage}>
  //         <nav className={styles.navigation}>
  //           <div className={styles.navContainer}>
  //             <div className={styles.logo}>
  //               <Link href="/">
  //                 <h2>Oluwaseun & Lateefah</h2>
  //               </Link>
  //             </div>
  //             <div className={styles.navLinks}>
  //               <Link href="/" className={styles.navLink}>
  //                 Home
  //               </Link>
  //               <Link href="/wedding-party" className={styles.navLink}>
  //                 Wedding Party
  //               </Link>
  //               <Link href="/gallery" className={styles.navLink}>
  //                 Gallery
  //               </Link>
  //               <Link
  //                 href="/rsvp"
  //                 className={`${styles.navLink} ${styles.active}`}
  //               >
  //                 RSVP
  //               </Link>
  //             </div>
  //           </div>
  //         </nav>

  //         <section className={styles.successSection}>
  //           <div className={styles.container}>
  //             <motion.div
  //               initial={{ opacity: 0, y: 30 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               transition={{ duration: 0.8 }}
  //               className={styles.successContent}
  //             >
  //               <div className={styles.successIcon}>✓</div>
  //               <h1>Thank You!</h1>
  //               <p>
  //                 Your RSVP has been successfully submitted. We can&apos;t wait to
  //                 celebrate with you!
  //               </p>
  //               <div className={styles.rsvpContactsBox}>
  //                 <h3>RSVP Contacts</h3>
  //                 <div className={styles.rsvpContacts}>
  //                   {rsvpContacts.map((c) => (
  //                     <a
  //                       key={c.phone}
  //                       href={`tel:${c.phone}`}
  //                       className={styles.rsvpContact}
  //                     >
  //                       <FiPhone /> {c.name}: {c.phone}
  //                     </a>
  //                   ))}
  //                 </div>
  //               </div>
  //               <Link href="/" className={styles.backButton}>
  //                 Back to Home
  //               </Link>
  //             </motion.div>
  //           </div>
  //         </section>
  //       </div>
  //     );
  //   }

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
            </div>

            <form className={styles.rsvpForm}>
              {/* <p className={styles.hashtag}>#SeunWedsLateefah</p> */}
              <div className={styles.dates}>
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
                  <b>RSVP:</b> Zubaidah (+234 810 301 8303), Tosin (+234 901 437
                  1462)
                </span>
              </div>
            </form>
            <div className={styles.rsvpContactsBox}>
              <h3>RSVP Contacts</h3>
              <div className={styles.rsvpContacts}>
                {rsvpContacts.map((c) => (
                  <a
                    key={c.phone}
                    href={`tel:${c.phone}`}
                    className={styles.rsvpContact}
                  >
                    <FiPhone /> {c.name}: {c.phone}
                  </a>
                ))}
              </div>
            </div>
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
                <h3>Nikkah</h3>
                <p className={styles.date}>28th June 2025, 10AM</p>
                <p className={styles.location}>Lokoja, Kogi State</p>
                <p className={styles.venue}>Secretariate Mosque, Zone 8 </p>
              </div>
              <div className={styles.event}>
                <h3>Reception</h3>
                <p className={styles.date}>28th June 2025, 11AM</p>

                <p className={styles.location}>Lokoja, Kogi State</p>
                <p className={styles.venue}>Ayonete Hotel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
