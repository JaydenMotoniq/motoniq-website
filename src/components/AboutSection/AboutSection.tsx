import classes from "./AboutSection.module.scss";

import Image from "next/image";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import { AnimatedText } from "../AnimatedText";

const AboutSection = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.about__header}>
        <Title>Our world is defined by an endless variety of tasks</Title>
        <h3 className={classes.about__subtitle}>
          <AnimatedText
            texts={[
              "We put LEARNING ROBOTS INTO \n THE GLOBAL WORKFORCE.",
              "We put USEFUL SKILLS INTO \n HUMANOIDS FROM DAY ONE.",
              "We put ROBOTS TO WORK IN THE \n REAL WORLD.",
            ]}
            duration={1500}
            revealRate={20}
            className={classes.about__subtitle}
          />
        </h3>
      </div>
      <div className={classes.about__body}>
        <div className={classes.about__card}>
          <Image
            src="/images/about-card-1.png"
            alt="1"
            width={512}
            height={950}
          />
        </div>
        <div className={classes.about__card}>
          <Image
            src="/images/about-card-2.png"
            alt="1"
            width={512}
            height={950}
          />
        </div>
      </div>
      <div className={classes.about__footer}>
        <div className={classes.about__contact}>
          <h4 className={classes.about__heading}>
            We’re building robots that learn by moving like us.
          </h4>
          <p className={classes.about__text}>
            Powered by our proprietary motion-capture system (MMoCS) and
            humanoid platform (CUR).
          </p>
          <a
            href="https://form.typeform.com/to/xymDjEjj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="dark" text="Contact us" />
          </a>
        </div>
        <p className={classes.about__text}>
          Motoniq is redefining how robots will join the workforce. Our
          full-stack system trains humanoids directly through human motion,
          enabling them to acquire real-world skills that transfer seamlessly
          across environments. With MoUs and LoIs in place, we’re building a
          library of deployable capabilities, where Motoniq robots improve with
          every task.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
