import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.invisible}>Balmer is funded by Xibalbus</p>
      <p>🤍 Built with glub by <a href="https://github.com/dirty-fisherman/Broadway" target="_blank">Dirty Fisherman</a> (<i>& PaulWasTook!</i>)</p>
    </footer>
  )
}
