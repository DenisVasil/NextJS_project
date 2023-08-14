import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Scenery from "public/scenery.jpg";
import Button from "@/components/Button/Button";


const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src={Scenery} fill={true} alt="" className={styles.img} />
      
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Conserving ecosystems</h1>
        <h2 className={styles.imgDesc}>
          Securing health through harmony with nature
        </h2>
      </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.desc}>
            We are an environmental organization. The uniqueness of our approach
            is that we recognize the profound link between the health of
            ecosystems and culture, health, safety and wellbeing of humans. It
            is important to note, however, that due to loss of the link with
            natural environment people in modern society, and particularly
            city-dwellers, may not realise to what extent humanity depends on
            ecosystems. Thus, our objective is to explain people how exactly
            nature determines their wellbeing and how each individual can
            contribute to conservation of the natural environment.
            <br />
            <br />
            We believe that this strategy will allow mobilising general public
            to support real action in curbing environmental problems. Because
            according to Millennium Ecosystem assessment (2005) global
            degradation of ecosystems is mainly caused by human actions, we
            believe that only through engagement of general public and
            collective action ecosystem health may be improved.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Our Mission</h1>
          <p className={styles.desc}>
            Based on a solid body of scientific evidence and our own research
            findings we make great efforts to address key environmental
            problems. Applying diverse environmental communication approaches
            including publishing, public speaking and art in line with UNESCO
            Sustainable Development Goals we share sound scientifically proven
            facts with people engaging them in support of sustainable
            development and conservation of natural ecosystems.
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
      About
    </div>
  );
};

export default About;
