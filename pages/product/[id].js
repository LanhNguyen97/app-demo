import React from 'react';
import { useDispatch } from 'react-redux'

import { callApi } from '../../utils/callApi';
import {
  ContainerProduct,
  ProductPrice,
  ProductName,
  OriginalPrice,
  WrapperPrice
} from '../../styles/stylePageDetailProduct'
import Button from '../../components/Button'
import { getPromotionalPrice, numberWithCommasAndCurrency } from '../../utils/common';
import { addToCart } from '../../redux/action';

const DetailProduct = (props) => {
  const { product = {} } = props
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(addToCart(product))
  }

  return (
    <ContainerProduct className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <img src={product.linkImage} alt={product.name} />
        </div>
        <div className="col-12 col-md-6 col-lg-9">
          <div className="info-product">
            <ProductName className="name-product mb-2">{product.name}</ProductName>
            <WrapperPrice className="mb-2">
              <ProductPrice className="price-product">{getPromotionalPrice(product.price, product.discount)}</ProductPrice>
              <OriginalPrice>{numberWithCommasAndCurrency(product.price)}</OriginalPrice>
            </WrapperPrice>
            <div className="desc-product mb-2">{product.description}</div>
            <Button theme="success" onClick={onClick}>
              Add to cart
          </Button>
          </div>
        </div>
      </div>
    </ContainerProduct>
  );
};

export async function getServerSideProps(context) {
  const { query } = context
  let dataProduct = [];

  if (query) {
    const res = await callApi(
      `https://5e1fc92ee31c6e0014c6000e.mockapi.io/api/product/${query.id}`,
      'get',
    )

    if (res && res.data) {
      dataProduct = res.data
    }
  }

  return {
    props: {
      product: dataProduct
    }
  }
}

export default DetailProduct;