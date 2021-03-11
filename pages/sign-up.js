import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import Button from '../components/Button';
import Input from '../components/Input'
import Alert from '../components/Alert'
import { WrapperSignIn, TitleSignIn } from '../styles/styleSignIn'
import { callApi } from '../utils/callApi';
import { generateToken } from '../utils/token';
import { setCookie } from '../utils/cookies';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { initInfo } from '../redux/userActions';

const SignUp = (props) => {
  const [state, setState] = useImmer({
    name: '',
    userName: '',
    passWord: '',
    isLoading: false,
    message: '',
    isMatching: false,
    showError: false,
  })
  let _isMounted = true;
  const router = useRouter()
  const dispatch = useDispatch()

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
    const dataPost = {
      name: state.name,
      userName: state.userName,
      passWord: state.passWord,
    }
    const res = await callApi('https://5e1fc92ee31c6e0014c6000e.mockapi.io/api/user', 'post', dataPost);

    if (res) {
      if (res.status === 201) {
        dispatch(initInfo(res.data))

        const token = generateToken({ userId: res.data.userId })

        if (token) {
          setCookie('token', token)
        }

        setStateCommon({
          showError: true,
          message: 'Success.',
          isLoading: false,
          isMatching: true,
          name: '',
          userName: '',
          passWord: ''
        })

        router.push('/')
      }
    }
  }

  const onSignUp = () => {
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
            <TitleSignIn>Sign Up</TitleSignIn>
            <div className="mb-3">
              <Input value={state.name} label="Name" type="text" returnName name="name" onChange={onChangeCommon} />
            </div>
            <div className="mb-3">
              <Input label="User name" value={state.userName} returnName name="userName" onChange={onChangeCommon} />
            </div>
            <div className="mb-3">
              <Input label="Password" type="password" returnName value={state.passWord} name="passWord" onChange={onChangeCommon} />
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
              <Button onClick={onSignUp} theme="success" className="w-100" disabled={state.userName.length === 0 || state.passWord.length === 0}>
                {state.isLoading ? 'Loading...' : 'Sign up'}
              </Button>
            </div>
          </WrapperSignIn>
        </div>
      </div>
    </div>
  );
}
export default SignUp