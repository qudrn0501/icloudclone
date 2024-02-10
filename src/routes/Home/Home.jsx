import React from 'react';
import styles from "./Home.module.css";
import ProfileCard from "../../component/ProfileCard/ProfileCard";
import Mail from "../../component/Mail/Mail";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.tile_grid}>
        <ProfileCard />
        <Mail />
      </div>
    </div>
  )
}

export default Home;