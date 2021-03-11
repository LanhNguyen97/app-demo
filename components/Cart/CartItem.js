import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const CartItem = ({
  name,
  image,
  price,
  quantity,
  addItem,
  removeItem,
  removeWholeItem,
  productID,
  totalQuantity,
}) => {
  return (
    <div className="cart-item">
      <a className="cart-image">
        <img src={image} alt={name} />
      </a>
      <div className="cart-info">
        <div className="title-product">
          <a href={`/san-pham/${productID}`}>{name}</a>
        </div>
        <div className="row-cart">
          <div className="cart-quantity">
            <div className="edit-quantity">
              <label className="title-quantity">Quantity</label>
              <div className="cart-select">
                <div
                  className="input-group-btn"
                  style={{ display: "inline-flex" }}
                >
                  <button
                    className="btn btn-default btn-minus"
                    onClick={removeItem}
                    type="button"
                  >
                    -
                  </button>
                  <span className="input-quantity">{quantity} </span>
                  <button
                    className={`btn btn-default btn-plus ${totalQuantity - quantity <= 0
                      ? "disable-button-increase"
                      : ""
                      }`}
                    onClick={addItem}
                    type="button"
                    disabled={totalQuantity - quantity <= 0}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="edit-quantity ml-3">
              <label className="title-quantity mb-2">
                {totalQuantity - quantity !== 0 ? "Remaining" : " "}
              </label>
              <label className="title-quantity">{`${totalQuantity - quantity === 0
                ? "Sold out"
                : `${totalQuantity - quantity} product(s)`
                }`}</label>
            </div>
          </div>
          <div className="div-price">
            <div className="text-price">
              <NumberFormat
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                renderText={(value) => (
                  <span className="price-product">{value}₫/1item</span>
                )}
              />
            </div>
            <a className="remove-product" onClick={removeWholeItem}>
              Remove this product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
