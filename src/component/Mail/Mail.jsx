import React, { useState } from 'react';
import styles from "./Mail.module.css";
import MailImg from "../../assets/images/mail.png";

const Mail = () => {

  return (
    <div className={`${styles.tile_grid_tile_container} ${styles.large}`}>
      <div className={`${styles.tile_grid_tile_content} ${styles.large}`}>
        <div className={styles.mail_home}>
          <div className={styles.banner}>
            <a href="#" className={styles.header_content}>
              <div className={styles.icon_wrapper}>
                <img src={MailImg} alt="mail_img" />
              </div>
              <div className={styles.text}>
                <div className={styles.heading}>Mail</div>
                <div className={styles.description}>
                  <span className={styles.description_content}>
                    <div className={styles.tile_description_header_icon}></div>
                    <span className={styles.description_text_content}>
                      받은 편지함 • 읽지 않은 메시지 없음
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </div>
          <button className={styles.icon_button}>
            <div className={styles.icon_button_img}></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Mail;