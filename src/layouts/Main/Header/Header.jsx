import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import logo from '../../../assets/images/apple_white.png';

const Header = () => {

  return (
    <header>
      <div className={styles.hd_logo}>
        <a href="#">
          <img src={logo} alt="" />
          <h1>iCloud</h1>
        </a>
      </div>
      <div className={styles.hd_buttons}>
        <button><div></div></button>
        <button><div></div></button>
        <button><div></div></button>
      </div>
     
    </header>
    
  )
}

export default Header;