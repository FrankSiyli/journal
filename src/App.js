import "./App.css";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Main>New Entry</Main>
      <Footer>Journal App -- 2028</Footer>
    </div>
  );
}

export default App;
