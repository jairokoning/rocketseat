import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/jairokoning.png",
        name: "Jairo Koning",
        role: "Web Software Engineer",
      },
      publishedAt: new Date("2023-07-18 05:52:22"),
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
        { type: "link", content: "jane.design/doctorcare" },
        { type: "tags", content: ["#novoprojeto", "#nlw", "#rocketseat"] },
      ]
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CTO @Rocketseat",
      },
      publishedAt: new Date("2023-07-21 09:41:45"),
      content: [
        { type: "paragraph", content: "Fala dev, blz?" },
        { type: "paragraph", content: "Acabamos de subir novos conteúdos no Ignite, corre lá para dar uma olhada!!!" },
        { type: "paragraph", content: "Bons estudos" },
        { type: "link", content: "https://app.rocketseat.com.br" },
        { type: "tags", content: ["#ignite", "#conteudoNovo"] },
      ]
    }
  ]  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
				<Sidebar />
				<main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}				
				</main>
			</div>
    </div>
  )
}