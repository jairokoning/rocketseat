import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
				<Sidebar />
				<main>
          <div>
            <strong>Jairo Koning</strong>
            <p>Este é um novo post sobre NodeJS</p>
          </div>					
				</main>
			</div>
    </div>
  )
}