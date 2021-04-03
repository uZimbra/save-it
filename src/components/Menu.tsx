import { MoreVert, Search, Add } from '@material-ui/icons'

import styles from '../styles/components/Menu.module.css'


export default function Menu() {
  return (
    <div className={styles.Container}>
      <div className={styles.Profile}>
        <div className={styles.ProfileUser}>
          <img src="/assets/Profile.jpg" alt="Imagem de Perfil"/>
          <p>Rodrigo</p>
        </div>
        <div className={styles.ProfileOptions}>
          <button>
            <MoreVert />
          </button>
        </div>
      </div>

      <span className={styles.Divider} />

      <div className={styles.SearchNoteGroup}>
        <button>
          <Search />
        </button>
        <input 
          placeholder= "Pesquisar um grupo de notas"
        >
        </input>
      </div>

      <div className={styles.NoteGroupList}>
        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>
        
        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        <div className={styles.NoteGroupItem}>
          <img src="/assets/decks/Forest-amico.png" alt="Imagem do Grupo de Notas"/>
          <p>Computação - Conceitos</p>
        </div>

        

      </div>

      <button className={styles.AddNoteGroup}>
        <Add />
      </button>

    </div>
  )
}