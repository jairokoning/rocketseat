import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Author {  
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  id: number;
  type: 'paragraph' | 'link' | 'tags';
  content: string | string[];
}
export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(['Post muito top, valeu por contribuir com a comunidade']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' H'h'mm", {
    locale: ptBR
  })
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  function deleteComment(commentToDelete: string) {
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
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.id}>{line.content}</p>
          }
          if (line.type === "link") {
            return (<p key={line.id}>👉{' '}<a href="">{line.content}</a></p>)
          }
          if (line.type === "tags" && Array.isArray(line.content)) {          
            return (              
              <p key={line.id}>
                {line.content.map((tag: string) => {
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
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
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
