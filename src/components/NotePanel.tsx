import { MoreVert, Search, Add } from '@material-ui/icons'

import styles from '../styles/components/NotePanel.module.css'
import NoteBox from './NoteBox'

export default function NotePanel() {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.Group}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem de Perfil"/>
          <p>Computação - Conceitos</p>
        </div>
        <div className={styles.Options}>
          <button>
            <Search />
          </button>
          <button>
            <MoreVert />
          </button>
        </div>
      </div>

      <div className={styles.NotesPanel}>
        <div className={styles.NotesContainer}>
          <NoteBox note={{
            title: "What is Lorem Ipsum?",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }} 
          />
          <NoteBox note={{
            title: "What is Lorem Ipsum?",
            text: "ypesetting type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }} />
          <NoteBox note={{
            title: "What is Lorem Ipsum?",
            text: "ypesetting type and sce leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }} />
          <NoteBox note={{
            title: "What is Lorem Ipsum?",
            text: "ypesetting type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }} />
          {/* <NoteBox note={{
            title: "What is Lorem Ipsum?",
            text: "ypesetting type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }} />
          <NoteBox note={{
            title: "What is Lorem Ipsum?",
            text: "ypesetting type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }} />
          <NoteBox note={{
            title: "What is Lorem Ipsum?",
            text: "ypesetting type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }} />
          <NoteBox note={{
            title: "What is Lorem Ipsum?",
            text: "ypesetting type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }} />
          <NoteBox note={{
            title: "What is Lorem Ipsum?",
            text: "ypesetting type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }} /> */}
          
        </div>
        <span className={styles.AddNote}>
          <button>
            <Add />
          </button>
        </span>
      </div>

    </div>
  )
}