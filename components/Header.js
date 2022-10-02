import styles from './Header.module.css';
import Image from 'next/image'
import logo from '../public/logo.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Broadway logo" />
      </div>
      <div className={styles.discord}>
        <a href="#">Join the Discord</a>
      </div>
    </header>
  )
}
