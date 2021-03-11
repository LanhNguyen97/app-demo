import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { checkToken } from './utils'

const withAuth = (WrapperComponent) => {
  const wrapper = props => {
    return <WrapperComponent {...props} />
  }

  wrapper.getInitialProps = async ctx => {
    checkToken(ctx)
    return {}
  }

  return wrapper;
};


export default withAuth;