import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content}) {
  const [comments, setComments] = useState(['Post muito top, valeu por contribuir com a comunidade']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' H'h'mm", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(e) {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(e) {
    e.target.setCustomValidity('');
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentTextEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          }
          if (line.type === "link") {
            return (<p key={line.content}>👉{' '}<a href="">{line.content}</a></p>)
          }
          if (line.type === "tags") {          
            return (
              <p key={line.content}>
                {line.content.map((tag) => {
                  return (
                    <span key={tag}>
                      <a href="">{tag}</a>{' '}
                    </span>                    
                  )
                })}
              </p>
            )            
          }
        })}
      </div>
      <form onSubmit={(event) => handleCreateNewComment(event)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment" 
          placeholder='Deixe seu comentário'
          onChange={(event) => handleNewCommentChange(event)}
          value={newCommentText}
          onInvalid={(event) => handleNewCommentInvalid(event)}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentTextEmpty}>Publicar</button>
        </footer>        
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              comment={comment} 
              onDeleteComment={deleteComment}  
            />)
        })}
      </div>
    </article>
  )
}
