import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>🤍 Built with glub by <a href="https://www.twitch.tv/dirty_fisherman" target="_blank">Dirty Fisherman</a></p>
      <p className={styles.invisible}>Balmer is funded by Xibalbus</p>
    </footer>
  )
}
