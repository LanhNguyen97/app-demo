import styled from 'styled-components'

export const ContainerNav = styled.div`
  background: #28a745;
  height: 50px;
  line-height: 50px;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WrapperNav = styled.div`
  display: flex;
`;

export const WrapperItemNav = styled.div`
  margin-right: 20px;
  a {
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
  }
`

export const WrapperIcon = styled.div`
  color: #fff;

  span {
    position: absolute;
    top: 6%;
    right: 0.3%;
    height: 20px;
    min-width: 20px;
    border-radius: 50%;
    color: #333;
    background-color: #fdd835;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
  }
`