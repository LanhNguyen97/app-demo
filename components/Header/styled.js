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
  position: relative;

  span {
    position: absolute;
    top: 6%;
    right: -60%;
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

export const WrapperAvatar = styled.div`
  width: 30px;
  line-height: 50px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  cursor: pointer;

  img {
    border-radius: 50%;
  }

  &:hover .menu {
    display: block;
  } 


  .menu {
    display: none;
    position: absolute;
    background: #fff;
    top: 80%;
    z-index: 999;
    width: auto;
    width: 100px;
    text-align: center;
    left: -220%;
    box-shadow: 0 0 20px rgb(0 0 0 / 15%);


    .profile {
      border-bottom: 1px solid #f1f1f1;
    }

    .profile:hover {
      background: #28a745;
      color: #fff;
    }

    .logout {
      width: auto;
      white-space: nowrap;
    }

    .logout:hover {
      background: #28a745;
      color: #fff;
    }
  }
`

export const WrapperNavMobile = styled.div`
  height: 100vh;
  position: fixed;
  left: 0;
  background: #28a745;
  z-index: 99;

  .item-nav-mobile {
    margin: 0 40px;
  }

  .wrapper-nav-mobile {
    margin-top: 40px;
  }
`

export const WrapperIconClose = styled.div`
  display: flex;
  justify-content: flex-end;
  
  svg {
    margin-right: 20px;
    margin-top: 20px;
    color: #fff;
    font-size: 25px;
    cursor: pointer;
  }
`