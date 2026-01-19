import classes from "./UseCasesSection.module.scss";

import Image from "next/image";
import Title from "@/components/ui/Title";

const cards = [
  {
    title: "Physical Labor",
    imageSrc: "/images/useCases-card-1.png",
    description:
      "Scaling workforce capacity in logistics, manufacturing and construction.",
  },
  {
    title: "Consumer Household",
    imageSrc: "/images/useCases-card-2.png",
    description: "Assistive support for aging populations and everyday living.",
  },
  {
    title: "Healthcare",
    imageSrc: "/images/useCases-card-3.png",
    description: "Patient mobility and assistive robotics in hospitals.",
  },
  {
    title: "Off-World",
    imageSrc: "/images/useCases-card-4.png",
    description:
      "Autonomous systems for space exploration and off-world construction.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="useCases" className={classes.useCases}>
      <div className={classes.useCases__header}>
        <Title>The Decade of Deployment Begins</Title>
        <h3 className={classes.useCases__subtitle}>
          Where Motoniq <br /> Robots Will Work
        </h3>
      </div>
      <div className={classes.useCases__body}>
        {cards.map(({ title, imageSrc, description }, idx) => (
          <div key={idx} className={classes.card}>
            <div className={classes.card__header}>
              <p className={classes.card__title}>{title}</p>
              <p className={classes.card__description}>{description}</p>
            </div>
            <div className={classes.card__body}>
              <Image src={imageSrc} alt={title} width={480} height={405} />
            </div>
            <div className={classes.card__footer}>
              <p>Usecase</p>
              <p>
                #{idx + 1}/{cards.length}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
