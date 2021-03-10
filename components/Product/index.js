import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

import {
  WrapperProduct,
  ProductThumbnail,
  ProductInfo,
  PromotionalPrice,
  OriginalPrice,
} from './styled'
import Button from '../Button'
import { getPromotionalPrice, numberWithCommasAndCurrency } from '../../utils/common';
import { addToCart } from '../../redux/action'

const Product = (props) => {
  const { product } = props
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(addToCart(product))
  }

  return (
    <WrapperProduct>
      <ProductThumbnail>
        <Link href={`/product/${product.productId}`}>
          <a>
            <img src={product.linkImage || ''} alt={product.name || ''} loading="lazy" />
          </a>
        </Link>
      </ProductThumbnail>
      <ProductInfo className="text-center">
        <Link href={`/product/${product.productId}`}><a>{product.name || 'abc'}</a></Link>
        <div className="text-center">
          <PromotionalPrice>{getPromotionalPrice(product.price, product.discount)}</PromotionalPrice>
          <OriginalPrice>{numberWithCommasAndCurrency(product.price)}</OriginalPrice>
        </div>
      </ProductInfo>
      <div className="text-center mb-2">
        <Button theme="success" onClick={onClick}>
          Add to cart
      </Button>
      </div>
    </WrapperProduct>
  );
};

export default Product;