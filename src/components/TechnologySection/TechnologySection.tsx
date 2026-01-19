import classes from "./TechnologySection.module.scss";

import Image from "next/image";
import Title from "../ui/Title";
import React from "react";

const cards = [
  {
    id: 1,
    imageSrc: "/images/technology-card-1.png",
    description:
      "Get a Motoniq humanoid with full learning kit (MMoCS, MMoCG, software).",
  },
  {
    id: 2,
    imageSrc: "/images/technology-card-2.png",
    description:
      "Humans perform daily tasks wearing MMoCS gear, capturing human motion and tactile data.",
  },
  {
    id: 3,
    imageSrc: "/images/technology-card-3.svg",
    description:
      "Human motion data is processed on Motoniq’s platform to generate transferable skills.",
  },
  {
    id: 4,
    imageSrc: "/images/technology-card-4.png",
    description:
      "Robots download trained skills and starts executing. The cycle repeats, expanding their capabilities.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className={classes.technology}>
      <Title>How it works</Title>
      {/* <div className={classes.technology__wrapper}> */}
      <div className={classes.technology__body}>
        {cards.map(({ id, imageSrc, description }, idx) => (
          <React.Fragment key={id}>
            <div className={classes.card}>
              <p className={classes.card__title}>/How it works</p>
              <p className={classes.card__number}>Step {id}</p>
              <p className={classes.card__description}>{description}</p>
              <div className={classes.card__content}>
                <Image
                  width={600}
                  height={780}
                  src={imageSrc}
                  alt={`Step ${id}`}
                  className={classes.card__image}
                />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            {idx !== cards.length - 1 && (
              <span className={classes.technology__arrow} />
            )}
          </React.Fragment>
        ))}
        <div className={classes.technology__footer}>
          <p>Iterate</p>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default TechnologySection;
