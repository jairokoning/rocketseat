import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/jairokoning.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jairo Koning</strong>
              <time title='15 de Julho às 14h09' dateTime='2023-07-15 14:09:57'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom amigo, parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}