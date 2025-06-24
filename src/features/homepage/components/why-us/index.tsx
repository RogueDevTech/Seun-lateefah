"use client";

import React from "react";
import styles from "../why-us/styles.module.scss";
import Image from "next/image";
import man from "../../../../../public/assets/images/Frame 1686562112.png";
import three from "../../../../../public/assets/images/three.webp";
import two from "../../../../../public/assets/images/two.webp";
import { motion } from "framer-motion";

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
       id="why-us"
    >
      <motion.div className={styles.installment} variants={itemVariants}>
        <motion.div className={styles.installment_text} variants={itemVariants}>
          <motion.p variants={itemVariants}>
            Why Buy Land on Installments?
          </motion.p>
          <motion.h1 variants={itemVariants}>
            Your dream home, your timeline
          </motion.h1>
          <motion.p variants={itemVariants}>
            <span>
              trusted guidance, expert advice, and a commitment to helping you
              achieve your goals, while eliminating the stress, uncertainty, and
              delays often associated with real estate transactions
            </span>
          </motion.p>
        </motion.div>
        <motion.div className={styles.man_box} variants={containerVariants}>
          <motion.div
            className={styles.man_image}
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={two}
              alt="people"
              width={180}
              height={130}
              className={styles.man_img}
            />
          </motion.div>
          <motion.div
            className={styles.man_image}
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={man}
              alt="people"
              width={180}
              height={130}
              className={styles.man_img}
            />
          </motion.div>
          <motion.div
            className={styles.man_image}
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={three}
              alt="people"
              width={180}
              height={130}
              className={styles.man_img}
            />
          </motion.div>
        </motion.div>
        <motion.div className={styles.start} variants={itemVariants}>
          <motion.h3 variants={itemVariants}>
            Start with as low as ₦40,000 / month
          </motion.h3>
        </motion.div>
      </motion.div>

      <motion.div className={styles.affordability} variants={containerVariants}>
        {[
          styles.affordability_box,
          styles.affordability_box_two,
          styles.affordability_box_three,
        ].map((boxStyle, index) => (
          <motion.div
            key={index}
            className={boxStyle}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h6 variants={itemVariants}>Affordability</motion.h6>
            <motion.p variants={itemVariants}>
              Discover the power of installment plans in breaking down financial
              barriers and unlocking the door to property ownership, with expert
              insights and real-world examples
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
