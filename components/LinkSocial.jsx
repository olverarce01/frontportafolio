'use client'

import styles from '../components/LinkSocial.module.css';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function LinkSocial() {
  return (
      <ul className={styles.ul}>
        <li className={styles.li}><a className={styles.a} href="mailto:olverarce01@gmail.com"><EmailIcon fontSize="large"/></a></li>
        <li className={styles.li}><a className={styles.a} href="https://github.com/olverarce01" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large"/></a></li>
        <li className={styles.li}><a className={styles.a} href="https://wa.me/56947854503" target="_blank" rel="noopener noreferrer"><WhatsAppIcon fontSize="large"/></a></li>
      </ul>      
  )
}
