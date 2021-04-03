import Menu from '../components/Menu'
import NoteGroup from '../components/NotePanel'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.Section}>
        <Menu />
        <NoteGroup />
      </div>
    </div>
  )
}
