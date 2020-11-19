import logo from "./logo.svg";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./js/Header";
import "./fontawesome";
import MainPage from "./js/MainPage";
import Footer from "./js/Footer";
import ProductPage from "./js/views/ProductPage";
import { db, storage } from "./js/config/firebase";
import { useEffect, useState } from "react";
import YarnPage from "./js/views/YarnPage";
import TextillPage from "./js/views/TextillPage";
import ThreadPage from "./js/views/ThreadPage";
import HaberdasheryPage from "./js/views/HaberdasheryPage";
import firebase from "firebase";
import LogIn from "./js/views/LogIn";
import SearchPage from "./js/views/SearchPage";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc, i) => {
          const data = doc.data();
          const id = doc.id;
          setProducts((prevState) => [...prevState, { ...data, id }]);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route path="/Włóczki">
            <YarnPage />
          </Route>

          <Route path="/Tkaniny">
            <TextillPage />
          </Route>

          <Route path="/Kordonki_i_nici">
            <ThreadPage />
          </Route>

          <Route path="/Pasmanteria">
            <HaberdasheryPage />
          </Route>

          {products.map((product) => (
            <Route key={product.id} path={`/product${product.id}`}>
              <ProductPage
                link={product.id}
                photos={product.photos}
                name={product.name}
                colorNumber={product.catalogNumber}
                price={product.price}
                quantity={product.quantity}
                producent={product.producent}
              />
            </Route>
          ))}

          <Route path="/user">
            <LogIn />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/basket">
            <LogIn />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
