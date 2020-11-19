import React, { useEffect, useState } from "react";
import ProductBoxSmall from "../Elements/productBoxSmall";
import { db, storage } from "../config/firebase";

function SearchPage() {
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          setProducts((prevState) => [...prevState, { ...data, id }]);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const handleClick = () => {
    setFilteredProducts(
      products.filter((el) => {
        return (
          el.name.toLowerCase().includes(item.toLowerCase()) ||
          el.producent.toLowerCase().includes(item.toLowerCase())
        );
      })
    );
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };
  return (
    <section className="product-page">
      <div className="container">
        <div className="product-box">
          <label className="search-box-label" htmlFor="search">
            Czego szukasz?
          </label>
          <input
            className="search-box"
            name="search"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button className="search-btn" onClick={handleClick}>
            Szukaj
          </button>
          <div className="new-added-box">
            {filteredProducts.map((product) => (
              <ProductBoxSmall
                key={product.id}
                link={product.id}
                photo={product.photos[0]}
                name={product.name}
                colorNumber={product.catalogNumber}
                price={product.price}
                producent={product.producent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
