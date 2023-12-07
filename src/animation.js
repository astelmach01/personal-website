// Animation.js
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "./animation.css"; // Ensure this path is correct for your CSS file

export default function Animation() {
  const ref = useRef([]);
  const [items, set] = useState([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80, color: "#28d79f" },
      // Removed the rotateX(180deg) transition here.
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["Andrew", "Stelmach"]), 500));
    ref.current.push(setTimeout(() => set(["Andrew"]), 2000));
    ref.current.push(setTimeout(() => set(["Andrew", "Stelmach"]), 2000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {transitions((style, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={style}
            onClick={reset}
          >
            <animated.div
              style={{ overflow: "hidden", height: style.innerHeight }}
            >
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
