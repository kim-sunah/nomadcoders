import Button from "./Button";
import styles from "./App.module.css"
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!
        <Button text={"Click Me"} />
      </h1>
    </div>
  )
}

export default App;