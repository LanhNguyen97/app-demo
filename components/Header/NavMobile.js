import React, { useEffect } from 'react';
import {
  WrapperNav,
  WrapperItemNav,
  Flex,
  WrapperNavMobile,
  WrapperIconClose
} from './styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const NavMobile = (props) => {
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    if (props.isShowNav) {
      props.onToggle()
    }
  }, [pathname])

  return (
    <WrapperNavMobile className={props.isShowNav ? 'd-block' : 'd-none'}>
      <WrapperIconClose>
        <FontAwesomeIcon icon={faTimesCircle} onClick={props.onToggle} />
      </WrapperIconClose>
      <WrapperNav className={props.isShowNav ? 'd-block  wrapper-nav-mobile' : 'd-none'}>
        <WrapperItemNav className="item-nav-mobile">
          <Link href="/">
            <a className={pathname === '/' ? 'nav-active' : ''}>Home</a>
          </Link>
        </WrapperItemNav>
        <WrapperItemNav className="item-nav-mobile">
          <Link href="/sign-in" as="/sign-in">
            <a className={pathname === '/sign-in' ? 'nav-active' : ''}>Sign In</a>
          </Link>
        </WrapperItemNav>
        <WrapperItemNav className="item-nav-mobile">
          <Link href="/sign-up" as="/sign-up">
            <a className={pathname === '/sign-up' ? 'nav-active' : ''}>Sign Up</a>
          </Link>
        </WrapperItemNav>
        <WrapperItemNav className="item-nav-mobile">
          <Link href="/categories" as="/categories">
            <a className={pathname === '/categories' ? 'nav-active' : ''}>Categories</a>
          </Link>
        </WrapperItemNav>
        <WrapperItemNav className="item-nav-mobile">
          <Link href="/checkout" as="/checkout">
            <a className={pathname === '/checkout' ? 'nav-active' : ''}>Checkout</a>
          </Link>
        </WrapperItemNav>
      </WrapperNav>
    </WrapperNavMobile>
  );
};

export default NavMobile;