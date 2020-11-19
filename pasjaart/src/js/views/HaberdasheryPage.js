import React, { useEffect, useState } from "react";
import ProductBoxSmall from "../Elements/productBoxSmall";
import { db, storage } from "../config/firebase";

function HaberdasheryPage() {
  const [habers, setHabers] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("type", "in", ["scissors", "crochet"])
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          setHabers((prevState) => [...prevState, { ...data, id }]);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    // db.collection("products")
    //   .where("type", "==", "crochet")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       const data = doc.data();
    //       const id = doc.id;
    //       setHabers((prevState) => [...prevState, { ...data, id }]);
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log("Error getting documents: ", error);
    //   });
  }, []);

  return (
    <section className="product-page">
      <div className="container">
        <div className="product-box">
          <div className="new-added-box">
            {habers.map((product) => (
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

export default HaberdasheryPage;
