import React from "react";

const CardProduct = (props) => {
  const product = props.product;
  const { name, price, image } = product;

  return (
    <div className="card" style={{ width: "calc((100% - 2rem) / 4)" }}>
      <img src={image} className="card-img-top" alt="img product" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}$</p>
        <div className="d-flex align-items-center justify-content-between">
          <a href="#" className="btn btn-primary btn-sm">
            Add to carts
            <i className="fa-solid fa-cart-shopping ms-2"></i>
          </a>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#productDetails"
            onClick={() => {
              props.handleDetailProduct(product);
            }}
          >
            View detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
