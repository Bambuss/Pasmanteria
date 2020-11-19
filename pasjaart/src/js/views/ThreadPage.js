import React, { useEffect, useState } from "react";
import ProductBoxSmall from "../Elements/productBoxSmall";
import { db, storage } from "../config/firebase";

function ThreadPage() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("type", "==", "cord")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          setThreads((prevState) => [...prevState, { ...data, id }]);
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
            {threads.map((product) => (
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

export default ThreadPage;
