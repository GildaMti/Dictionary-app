import "./styles.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      React Dictionary App
      </header>
     <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      <footer className="App-footer">
    <small>  Coded by Mozhdeh Matalebi </small>
      </footer>
      </div>
    </div>
  );
}
