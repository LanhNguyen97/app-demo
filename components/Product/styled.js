import styled from 'styled-components'

export const WrapperProduct = styled.div`
  margin-bottom: 0;
  background: #fff;
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f1f1;
  margin-bottom: 16px;
  box-shadow: 0px 0px 8px #b3aeae;
  border-radius: 5px;

  &:hover img {
    transform: scale(1.1);
  }
`

export const ProductThumbnail = styled.div`
  position: relative;
  height: 150px;
  background-color: transparent;

  img {
    width: auto;
    max-height: 100%;
    /* position: absolute; */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 10px;
    transition-property: background-image;
    transition-duration: 1.0s;
    transition-timing-function: ease-out;
    transition: all 700ms ease 0s;
  }

  a {
    transition: all 150ms ease-in-out;
  }

  /* @media (max-width: 321px) {
    height: 136px;
  }

  @media (max-width: 376px) {
    height: 164px;
  }

  @media (max-width: 1024px) {
    height: 143px;
  } */
`

export const ProductInfo = styled.div`
  z-index: 1;
  position: relative;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;

  a {
    font-size: 14px;
    line-height: 24px;
    color: #333;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #222;
    text-decoration: none;
    display: block;
  }

  a:hover {
    color: #189eff;
  }
`

export const PromotionalPrice = styled.div`
  color: #d0021b;
  font-size: 14px;
  line-height: 1.71429em;
  display: inline-block;
  font-weight: 600;
`

export const OriginalPrice = styled.div`
  text-decoration: line-through;
  font-size: 12px;
  margin: 0 0 0 15px;
  display: inline-block;
  color: #666;
`