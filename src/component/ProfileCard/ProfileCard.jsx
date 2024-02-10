import React, { useState } from 'react';
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {

  return (
    <div className={`${styles.tile_grid_tile_container} ${styles.small}`}>
      <div className={`${styles.tile_grid_tile_content} ${styles.small}`}>
        <div className={styles.profile_card}>
          <div className={styles.profile_card_link}>
            <div className={styles.profile_avatar}>
              <div className={styles.profile_background}></div>
              <div className={`${styles.static_avatar} ${styles.image_placeholder}`}></div>
            </div>
            <div className={styles.user_info}>
            <div className={styles.user_name}>Byung Koo</div>
            <div className={styles.email}>qudrn0501@daum.net</div>
          </div>
          <div className={styles.plan_name}>iCloud+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;