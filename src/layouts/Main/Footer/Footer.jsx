import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {

  let korFontStyle = {
    letterSpacing: '-0.2px',
    fontSize: '13px'
  }

  return (
    <footer>
      <div className={styles.navigation}>
        <div className={styles.drawer}>
          <div className={styles.widjet}>
            <a href="#" className={styles.nav_link}>
              <h1>나의 요금제</h1>
              <span></span>
            </a>
            <div className={styles.graphic}>
              <span></span>
              <h2>iCloud+</h2>
            </div>
            <div className={styles.description}>
              <div className={styles.large_info}>
                <span>50</span><span>GB</span>의 저장 공간
              </div>
              <div className={styles.small_info}>
                월 <span>₩</span><span>1,100</span>
              </div>  
            </div>
          </div>
          <div className={styles.widjet}>
            <a href="#" className={styles.nav_link}>
              <h1>나의 저장 공간</h1>
              <span></span>
            </a>
            <div className={styles.graphic}>
              <div className={styles.storage_graphic}>
                <div className={styles.storage_usage}>
                  <div className={styles.meter_gauge}>
                    <div className={styles.segment} style={{width: '83%', backgroundColor : 'rgb(255, 204, 0)'}}></div>
                    <div className={styles.segment} style={{width: '12%', backgroundColor : 'rgb(88, 86, 214)'}}></div>
                    <div className={styles.segment} style={{width: '2%', backgroundColor : 'rgb(255, 149, 0)'}}></div>
                    <div className={styles.segment} style={{width: '2%', backgroundColor : 'rgb(52, 199, 89)'}}></div>
                    <div className={styles.segment} style={{width: '1%', backgroundColor : 'rgb(0, 122, 255)'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.large_info}>
                <span>48.25</span><span>GB</span> 사용 중
              </div>
              <div className={styles.small_info}>
                <span>50</span><span>GB</span> 중 <span>96</span>%
              </div>
            </div>
          </div>
          <div className={styles.widjet}>
            <a href="#" className={styles.nav_link}>
              <h1>데이터 복구</h1>
              <span></span>
            </a>
            <div className={styles.graphic}>
              <div className={styles.recovery_graphic}>
                <div className={styles.recovery_document}></div>
                <div className={styles.recovery_bookmark}></div>
                <div className={styles.recovery_account}></div>
                <div className={styles.recovery_calender}></div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.large_info}></div>
              <div className={styles.small_info} style={korFontStyle}>
                삭제한 파일, 책갈피, 연락처 및 캘린더를 복원합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.legal_footer}>
        <div className={styles.application_content}>
          <div className={styles.legal_footer_content}>
            <div className={styles.inner_row}>
              <div className={styles.with_separator}>
                <a href="#" className={styles.system_status}>시스템 상태</a>
                <div className={styles.separator}></div>
              </div>
              <div className={styles.with_separator}>
                <a href="#" className={styles.privacy}>개인정보 처리방침</a>
                <div className={styles.separator}></div>
              </div>
              <a href="#" className={styles.terms}>이용 약관</a>
            </div>
            <div className={styles.inner_row}>
              <span className={styles.copyright}>
                Copyright © 2023 Apple Inc. 모든 권리 보유.
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;