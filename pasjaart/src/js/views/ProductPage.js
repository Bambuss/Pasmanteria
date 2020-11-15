import React, { useState } from "react";
import image1 from "../../resources/images/logo.jpg";
import image2 from "../../resources/images/minii.jpg";

function ProductPage() {
  const [image, setImage] = useState(image1);

  const handleClick1 = () => {
    setImage(image1);
  };
  const handleClick2 = () => {
    setImage(image2);
  };
  const productPrice = 12.0;

  return (
    <section className="product-page">
      <div className="container">
        <div className="product-box">
          <div className="product-gallery">
            <div className="product-photo-primary">
              <img src={image} alt="photo-big" />
            </div>
            <div className="product-photo-secondary">
              <img src={image1} alt="obraz1" onClick={handleClick1} />
              <img src={image2} alt="obraz2" onClick={handleClick2} />
            </div>
          </div>
          <h3 className="product-title">
            Przykładowa włóczka <span>Numer katalogowy</span>
          </h3>
          <h4 className="product-">Cena: {productPrice}zł</h4>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
