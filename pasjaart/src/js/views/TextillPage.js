import React, { useEffect, useState } from "react";
import ProductBoxSmall from "../Elements/productBoxSmall";
import { db, storage } from "../config/firebase";

function TextillPage() {
  const [textils, setTextils] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("type", "==", "textil")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          setTextils((prevState) => [...prevState, { ...data, id }]);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <section className="product-page">
      <div className="container">
        <div className="product-box">
          <div className="new-added-box">
            {textils.map((product) => (
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

export default TextillPage;
