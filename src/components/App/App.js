import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
        <Sidebar/>
        <Main/>
    </div>
  );
}

export default App;
