import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.item}>
      {item ? (
        <>
          <img src={item.image} alt={item.title} className={styles.image} />
          <div className={styles.card_details}>
            <p className={styles.title}>{item.title}</p>
            <a
              className={styles.play_button}
              href={`/show/${item.item_id}?play=true`}
            >
              <img
                className={styles.play_icon}
                src="https://d1l07mcd18xic4.cloudfront.net/static/play-outline.svg"
                alt="Play"
              />
            </a>
          </div>
        </>
      ) : (
        <>
          <i>No Items Found</i>
        </>
      )}
    </div>
  );
};

export default Card;
