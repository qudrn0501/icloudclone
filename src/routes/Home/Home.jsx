import React from 'react';
import styles from "./Home.module.css";
import Post from "../../component/Post/Post";

const Home = () => {
  return (
    <div className={styles.homepage}>
        <Post></Post>
    </div>
  )
}

export default Home;