import React, { useState } from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Link from "next/link";
import { useRouter } from 'next/router'

import { Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import {
  addToCart,
  removeFromCart,
  removeWholeItem,
} from "../../redux/action";

const Cart = (props) => {
  const { isShow, cart, modalCart } = props;
  const router = useRouter();
  const lengthCart = cart.length;

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += parseInt(item.price) * parseInt(item.quantity);
  });

  const onClose = () => {
    props.onClose();
  };

  const onClick = () => {
    props.onClose();
    router.push('/checkout');
  }

  return (
    <Modal
      show={isShow}
      onHide={onClose}
      dialogClassName="popup-cart"
    >
      <Modal.Header closeButton>
        <Modal.Title>Shopping cart</Modal.Title>
        <span className="total-quantity">
          <span className="total">{lengthCart} </span>
          product(s)
        </span>
      </Modal.Header>
      <Modal.Body>
        {(cart && cart.length === 0) || cart.size === 0 ? (
          <p style={{ textAlign: "center", marginTop: "150px" }}>
            Empty cart, press <a href="/">here</a> to continue shopping
          </p>
        ) : (
          cart.map((product, index) => {
            return (
              <CartItem
                key={index}
                name={product.name}
                image={product.linkImage}
                price={product.price}
                quantity={product.quantity}
                addItem={() => props.addToCart(product)}
                removeItem={() => props.removeFromCart(product)}
                removeWholeItem={() => props.removeWholeItem(product)}
                totalQuantity={product.totalQuantity}
              />
            );
          })
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="div-total">
          <div className="label-total">Total:</div>
          <div className="text-total-right">
            <NumberFormat
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(value) => (
                <span className="total-price">{value}₫</span>
              )}
            />
          </div>
        </div>
        <div className="div-checkout">
          <button type="button" className="btn btn-primary btn-block" onClick={onClick}>
            <a>Checkout</a>
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

Cart.propTypes = {
  addToCart: PropTypes.func.isRequired,
  // removeFromCart: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  removeWholeItem,
  // toggleModalCart,
})(Cart);
