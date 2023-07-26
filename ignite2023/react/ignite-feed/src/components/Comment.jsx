import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';
export function Comment({ comment, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jairokoning.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jairo Koning</strong>
              <time title='15 de Julho às 14h09' dateTime='2023-07-15 14:09:57'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}