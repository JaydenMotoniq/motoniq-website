import classes from "./IntroSection.module.scss";
import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import { EmailForm } from "./EmailForm";

const IntroSection = () => {
  return (
    <section className={classes.intro}>
      <Marquee
        texts={[
          "Motion intelligence for machines",
          "Robots That Do Real Work",
          "Motion Intelligence for Machines",
        ]}
      />
      <div className={classes.intro__body}>
        <picture>
          <source
            srcSet="/title-lg.svg"
            media="(width >= 768px)"
            width={1360}
            height={300}
          />
          <Image
            src="/title.svg"
            alt="Motion Intelligent machines"
            width={346}
            height={150}
            className={classes.intro__title}
          />
        </picture>
        <div className={classes.intro__footer}>
          <p className={classes.intro__text}>
            The first humanoid robots trained directly <br /> from human motion
          </p>
          <EmailForm variant="vertical" />
        </div>
      </div>
      <video loop muted autoPlay playsInline className={classes.intro__video}>
        <source
          src="/intro-video-lg.webm"
          type="video/webm"
          media="(min-width: 1200px)"
        />
        <source src="/intro-video.webm" type="video/webm" />
      </video>
      <Marquee texts={["Where human expertise becomes robotic mastery"]} />
    </section>
  );
};

export default IntroSection;
