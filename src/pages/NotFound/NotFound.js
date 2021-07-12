import React from "react";
import styles from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <div className={styles.gifloading}></div>
      <p style={{ textAlign: "center" }}>ERROR 404 : PAGE NOT FOUND</p>
    </div>
  );
};
export default NotFound;
