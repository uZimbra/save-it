import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import styles from '../styles/components/NoteBox.module.css'

export default function NoteBox({ note }) {
  return (
    <div className={styles.NoteContainer}>
      <button className={styles.DeleteNote}>
        <Close></Close>
      </button>
      <h1 className={styles.NoteTitle}> {note.title} </h1>
      <div className={styles.NoteTextContainer}>
        <p className={styles.NoteText}>
          { note.text }
        </p>
      </div>
    </div>
  )
}