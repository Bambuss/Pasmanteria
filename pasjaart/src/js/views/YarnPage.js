import React, { useEffect, useState } from "react";
import ProductBoxSmall from "../Elements/productBoxSmall";
import { db, storage } from "../config/firebase";

function YarnPage() {
  const [yarns, setYarns] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("type", "==", "yarn")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          setYarns((prevState) => [...prevState, { ...data, id }]);
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
            {yarns.map((product) => (
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

export default YarnPage;
