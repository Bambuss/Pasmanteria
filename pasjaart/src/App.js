import logo from "./logo.svg";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./js/Header";
import "./fontawesome";
import MainPage from "./js/MainPage";
import Footer from "./js/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route path="/header"></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
