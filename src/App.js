import "./styles.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
    <strong>  My Dictionary App </strong>
      </header>
     <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      <footer className="App-footer">
   
    <small>
        This project was coded by Mozhdeh Matalebi and is {" "} <a href="https://github.com/GildaMti/Dictionary-app" >open-sourced on Github </a>
      </small>
      
      </footer>
      </div>
    </div>
  );
}

