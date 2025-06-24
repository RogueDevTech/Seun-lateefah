"use client";
import React, { useEffect, useState } from "react";
import styles from "../hero-section/styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { availableListing } from "../data";
import HouseCard from "@/app/components/house-card";

const images = [
  "/assets/images/hero/second.webp",
  "/assets/images/hero/first.webp",
  "/assets/images/hero/third.webp",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [randomHouses, setRandomHouses] = useState<typeof availableListing>([]);

  const getRandomListings = (count: number) => {
    const shuffled = [...availableListing].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    setRandomHouses(getRandomListings(1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.background_image}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.background_overlay}>
          <div className={styles.hero_wrapper}>
            <motion.div
              className={styles.hero_text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Own Your Dream Land with Flexible Installments
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Bricklage is making land ownership accessible with easy,
                structured installment payments.
              </motion.p>
              <motion.div
                className={styles.hero_buttons}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href={"/listing-properties"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started Today
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className={styles.hero_image}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 1],
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                times: [0, 0.7, 1],
              }}
            >
              {randomHouses.map((house, index) => (
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  key={index}
                  className={styles.house_card_box}
                  style={{ cursor: "pointer" }}
                >
                  <Link href={`/listing-properties/${house.id}`} passHref>
                    <HouseCard
                      housePics={house.housePics}
                      field={house.field}
                      location={house.location}
                      apartment={house.apartment}
                      amount={Number(house.amount)}
                      square={String(house.square)}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
