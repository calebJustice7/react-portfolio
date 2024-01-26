import { useTrail, a } from "@react-spring/web";
import styles from "./styles.module.css";
import React from "react";

const Trail: React.FC<{
  open: boolean;
  children: React.ReactNode;
  customClass: string;
  delay: number;
  width?: number;
}> = ({ open, children, customClass, delay }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 400 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    // width: open ? width || window.innerWidth * 0.9 : 0,
    from: { opacity: 0, x: 100 },
    delay,
  });
  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} className={styles[customClass]} style={style}>
          {/* <a.div>{items[index]}</a.div> */}
          {items[index]}
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
