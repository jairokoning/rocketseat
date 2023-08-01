import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';
import styles from './App.module.css';
import './global.css';

export function App() {
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/jairokoning.png",
        name: "Jairo Koning",
        role: "Web Software Engineer",
      },
      publishedAt: new Date("2023-07-18 05:52:22"),
      content: [
        { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
        { id: 2, type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
        { id: 3,  type: "link", content: "jane.design/doctorcare" },
        { id: 4,  type: "tags", content: ["#novoprojeto", "#nlw", "#rocketseat"] },
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
        { id: 5,  type: "paragraph", content: "Fala dev, blz?" },
        { id: 6,  type: "paragraph", content: "Acabamos de subir novos conteúdos no Ignite, corre lá para dar uma olhada!!!" },
        { id: 7,  type: "paragraph", content: "Bons estudos" },
        { id: 8,  type: "link", content: "https://app.rocketseat.com.br" },
        { id: 9,  type: "tags", content: ["#ignite", "#conteudoNovo"] },
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
                post={post}
              />
            )
          })}				
				</main>
			</div>
    </div>
  )
}