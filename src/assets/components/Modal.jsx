import React from "react";

const Modal = ({ productDetail }) => {
  const { name, image, price, description } = productDetail;
  return (
    <div
      className="modal fade"
      id="productDetails"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Product detail
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="d-flex gap-3 align-items-start justify-content-between">
              <div className="w-50 border p-3">
                <img className="w-100" src={image} alt="img detail" />
              </div>
              <div className="w-50">
                <h4>{name}</h4>
                <p>{price}$</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
