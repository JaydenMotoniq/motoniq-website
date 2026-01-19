import classes from "./MarketSection.module.scss";

import Title from "../ui/Title";
import React from "react";

const cards = [
  { value: "$2.43B", year: 2023 },
  { value: "$66B", year: 2032 },
  { value: "$7T", year: 2050 },
];

const MarketSection = () => {
  return (
    <section className={classes.market}>
      <Title>Projected market</Title>
      <div className={classes.market__body}>
        {cards.map(({ value, year }, idx) => (
          <React.Fragment key={idx}>
            <div className={classes.card}>
              <p className={classes.card__value}>{value}</p>
              <span className={classes.card__year}>{year}</span>
            </div>
            {idx !== cards.length - 1 && (
              <div className={classes.card__border} />
            )}
          </React.Fragment>
        ))}
      </div>
      <p className={classes.market__text}>
        Total addressable frontier across all sectors
      </p>
    </section>
  );
};

export default MarketSection;
