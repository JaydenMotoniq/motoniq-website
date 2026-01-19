import React from "react";
import classes from "./Marquee.module.scss";

import ReactFastMarquee from "react-fast-marquee";

interface MarqueeProps {
  texts: string[];
}

const Marquee = ({ texts }: MarqueeProps) => {
  return (
    <div className={classes.marquee}>
      <ReactFastMarquee autoFill speed={100}>
        <div className={classes.marquee__item}>
          {texts.map((text) => (
            <p className={classes.marquee__text} key={text}>
              {text}
              <span className={classes.marquee__dot} />
            </p>
          ))}
        </div>
      </ReactFastMarquee>
    </div>
  );
};

export default Marquee;
