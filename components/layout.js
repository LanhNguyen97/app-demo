import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../redux/userActions';
import Header from './Header'

export default function Layout({ children, home }) {

  const dispatch = useDispatch()
  dispatch(authenticateUser())

  useEffect(() => {
    console.log('effect layout ====>');
  })
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}