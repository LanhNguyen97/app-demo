import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'

import {
  ContainerNav,
  WrapperNav,
  WrapperItemNav,
  Flex,
  WrapperIcon
} from './styled'
import { init } from '../../redux/action'
import ModalCart from '../Cart/Cart'

const Pointer = { cursor: 'pointer' }

const Header = (props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { pathname } = router
  const { cart } = props
  const [isShow, setIsShow] = useState(false)


  const toggleModal = () => {
    setIsShow(!isShow)
  }

  useEffect(() => {
    dispatch(init())
  }, [])

  return (
    <ContainerNav>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Flex>
              <WrapperNav>
                <WrapperItemNav>
                  <Link href="/">
                    <a className={pathname === '/' ? 'nav-active' : ''}>Home</a>
                  </Link>
                </WrapperItemNav>
                <WrapperItemNav>
                  <Link href="/sign-in" as="/sign-in">
                    <a className={pathname === '/sign-in' ? 'nav-active' : ''}>Sign In</a>
                  </Link>
                </WrapperItemNav>
                <WrapperItemNav>
                  <Link href="/sign-up" as="/sign-up">
                    <a className={pathname === '/sign-up' ? 'nav-active' : ''}>Sign Up</a>
                  </Link>
                </WrapperItemNav>
                <WrapperItemNav>
                  <Link href="/categories" as="/categories">
                    <a className={pathname === '/categories' ? 'nav-active' : ''}>Categories</a>
                  </Link>
                </WrapperItemNav>
                <WrapperItemNav>
                  <Link href="/checkout" as="/checkout">
                    <a className={pathname === '/checkout' ? 'nav-active' : ''}>Checkout</a>
                  </Link>
                </WrapperItemNav>
              </WrapperNav>
              <WrapperIcon>
                <FontAwesomeIcon icon={faShoppingCart} onClick={toggleModal} style={Pointer} />
                <span className="total">{cart.length || 0}</span>
              </WrapperIcon>
            </Flex>
            <ModalCart isShow={isShow} onClose={toggleModal} />
          </div>
        </div>
      </div>
    </ContainerNav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps, null)(Header);