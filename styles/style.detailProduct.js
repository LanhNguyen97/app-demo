import styled from 'styled-components'

export const ContainerProduct = styled.div`
  background-color: #fff;
  margin-top: 40px;
  padding: 40px;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0px 0px 8px #b3aeae;
`

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  text-decoration: none;
`

export const WrapperPrice = styled.div`
  display: flex;
  align-items: center;
`

export const ProductPrice = styled.div`
  font-size: 25px;
  color: #d0021b;
  font-weight: 700;
  margin-right: 15px;
`

export const OriginalPrice = styled.div`
  text-decoration: line-through;
  font-size: 16px;
  display: inline-block;
  color: #666;
`