"use client";
import React, { useState } from "react";
import styles from "../faq/styles.module.scss";
import { faqs } from "../data";
import Image from "next/image";
import man from "../../../../../public/assets/images/last-frames.webp";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div  id="faqs" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.property_wrapper}>
          <div className={styles.property_container}>
            <p>FAQs</p>
            <h1>
              Your normal queried answers <br /> for security
            </h1>
          </div>
          <div className={styles.btn_listing}>
            <button>Contact Us</button>
          </div>
        </div>
        <div className={styles.accordion_wrapper}>
          <div className={styles.accordion}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.accordion_item}>
                <button
                  className={styles.accordion_header}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.content}</span>
                  {openIndex === index ? <span>-</span> : <span>+</span>}
                </button>
                {openIndex === index && (
                  <p className={styles.accordion_content}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div className={styles.man_image}>
            <Image
              src={man}
              alt="man"
              width={456}
              height={405}
              className={styles.man_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
