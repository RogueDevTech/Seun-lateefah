import React from "react";
import styles from "../about-us/styles.module.scss";
import { team } from "../data";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div  id="about-us" className={styles.wrapper}>
      <div className={styles.about_us_text}>
        <div className={styles.about_us}>
          <p>About us</p>
          <h1>Reinforcing Trust & Expertise</h1>
        </div>
        <div className={styles.about_last_text}>
          <p>
            <span>Bricklage&apos;s Vision:</span> Making land ownership
            accessible through innovation.
          </p>
          <p>
            <span>Expertise & Partnerships:</span> Showcasing credibility with
            financial institutions, government backing, and past success
            stories.
          </p>
        </div>
      </div>
      <div className={styles.team}>
        <h2>our services</h2>
        <div className={styles.team_container}>
          {team.map((feat, i) => (
            <div className={styles.team_box} key={i}>
              <div className={styles.elena_image}>
                <Image
                  src={feat.img}
                  alt="elena"
                  width={300}
                  height={100}
                  className={styles.elena_img}
                />
                <div className={styles.team_text}>
                  <p>
                    <span>{feat.name}</span>
                  </p>
                  <p>{feat.founder}</p>
                </div>
              </div>
              {/* <div className={styles.team_text}>
                <p>{feat.name}</p>
                <p>{feat.founder}</p>
              </div> */}
            </div>
          ))}
        </div>
        <p>
          Highlighting experience in real estate development and management.
        </p>
      </div>
    </div>
  );
}
