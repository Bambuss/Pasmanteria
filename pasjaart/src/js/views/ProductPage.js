import React, { useState } from "react";
import { db, storage } from "../config/firebase";

function ProductPage(props) {
  const [image, setImage] = useState(props.photos[0]);

  const handleClick = (e) => {
    setImage(e.target.src);
  };

  //animacja przycisku
  var animateButton = function (e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };

  const DisabledButton = () => {
    if (props.quantity <= 1) {
      return (
        <button
          disabled
          style={{
            backgroundColor: `#d9ac9c`,
            textDecoration: "line-through",
            color: "#5a3936",
            border: `1px solid #5a3936`,
            boxShadow: `inset 0px 0px 5px 2px #5a3936`,
          }}
          className="bubbly-button buy-btn-sm"
          onClick={animateButton}
        >
          BRAK W MAGAZYNIE
        </button>
      );
    } else {
      return (
        <button className="bubbly-button buy-btn-sm" onClick={animateButton}>
          DODAJ DO KOSZYKA
        </button>
      );
    }
  };

  return (
    <section className="product-page">
      <div className="container">
        <div className="product-box">
          <div className="product-gallery">
            <div className="product-photo-primary">
              <img src={image} alt="photo-big" />
            </div>
            <div className="product-photo-secondary">
              {/* <img src={props.photoFirst} alt="obraz1" onClick={handleClick1} /> */}

              {props.photos.map((photo) => {
                return (
                  <img
                    key={photo}
                    src={photo}
                    alt={`${photo}`}
                    onClick={handleClick}
                  />
                );
              })}
              {/* storage
                      .refFromURL(photo)
                      .getDownloadURL()
                      .then(function (url) {
                        return url;
                      })} */}
              {/* <img
                src={props.photoSecond}
                alt="obraz2"
                onClick={handleClick2}
              /> */}
            </div>
          </div>
          <h3 className="product-title">
            {props.name} <p>{props.producent}</p>
            <span>Kolor: {props.colorNumber}</span>
          </h3>
          <h4 className="product-price">Cena: {props.price}zł</h4>

          <div className="product-buy-box">
            <div className="buy-box-quant">
              <p>Ilość:</p>
              <input type="number" />
              <p>szt.</p>
            </div>
            <DisabledButton />
          </div>
          <strong>Dostępna ilość: {props.quantity} szt.</strong>
          <h5>Opis produktu</h5>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ex
            delectus aspernatur officia quae asperiores obcaecati mollitia
            corporis ut accusamus aperiam. Dolores consectetur nam esse
            blanditiis vel id necessitatibus expedita.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
