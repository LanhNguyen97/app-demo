import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import Button from '../components/Button';
import Input from '../components/Input'
import Alert from '../components/Alert'
import { WrapperSignIn, TitleSignIn } from '../styles/style.signIn'
import { callApi } from '../utils/callApi';
import { useRouter } from 'next/router';
import { generateToken } from '../utils/token';
import { setCookie, removeCookie } from '../utils/cookies';
import { checkToken } from '../components/Auth/utils';
import { connect, useDispatch } from 'react-redux';
import { initInfo } from '../redux/userActions';

const SignIn = props => {
  const { isValidToken, user = {} } = props

  const onLogOut = () => {
    removeCookie('token')
    window.location.href = window.location.href
  }

  if (isValidToken) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            {
              Object.keys(user).length > 0 && `Hello, ${user.name}.`
            }
          </div>
          <div className="col-4">
            <Button
              onClick={onLogOut}
              theme="primary"
              className="w-100"
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    )
  }

  let _isMounted = true;
  const router = useRouter()
  const dispatch = useDispatch()

  const [state, setState] = useImmer({
    userName: '',
    passWord: '',
    isLoading: false,
    message: '',
    isMatching: false,
    showError: false,
  })


  useEffect(() => {

    return () => {
      _isMounted = false;
    }
  }, [])

  const setStateCommon = objects => {
    if (_isMounted) {
      Object.keys(objects).forEach(key => {
        setState(draft => {
          draft[key] = objects[key];
        });
      });
    }
  };


  const onChangeCommon = (name, value) => {
    setStateCommon({ [name]: value })
  }

  const onCheckInfoLogin = async () => {
    const res = await callApi('https://5e1fc92ee31c6e0014c6000e.mockapi.io/api/user');

    if (res) {
      const dataUser = res.data;
      let isMatching = false;
      let userInfo = {}

      dataUser.forEach(user => {
        if (user.userName === state.userName && user.passWord === state.passWord) {
          isMatching = true;
          userInfo = user
        }
      })

      if (isMatching) {
        // dispatch(initInfo(userInfo))

        const token = generateToken({ userId: userInfo.userId })

        if (token) {
          setCookie('token', token)
        }

        setStateCommon({ showError: true, message: 'Success.', isLoading: false, isMatching: true, userName: '', passWord: '' })
        router.push('/')
      } else {
        setStateCommon({ showError: true, message: 'Username or password is not matching.', isLoading: false })
      }
    }
  }

  const onSignIn = () => {
    setStateCommon({ isLoading: true })
    onCheckInfoLogin()
  }

  const onClose = () => {
    setStateCommon({ showError: false })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <WrapperSignIn className="wrapper-sign-in">
            <TitleSignIn>Sign In</TitleSignIn>
            <div className="mb-3">
              <Input value={state.userName} label="User name" returnName name="userName" onChange={onChangeCommon} />
            </div>
            <div className="mb-3">
              <Input value={state.passWord} label="Password" type="password" returnName name="passWord" onChange={onChangeCommon} />
            </div>
            {
              state.showError && (
                <Alert
                  showClose
                  message={state.message}
                  className={state.isMatching ? 'success' : 'danger'}
                  onClose={onClose}
                />
              )
            }
            <div>
              <Button onClick={onSignIn} theme="success" className="w-100" disabled={state.userName.length === 0 || state.passWord.length === 0}>
                {state.isLoading ? 'Loading...' : 'Sign in'}
              </Button>
            </div>
          </WrapperSignIn>
        </div>
      </div>
    </div>
  );
};

SignIn.getInitialProps = async ctx => {
  const { isValidToken } = checkToken(ctx)
  return { isValidToken }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(SignIn);