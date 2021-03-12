import { useDispatch } from 'react-redux';
import { authenticateUser } from '../redux/userActions';
import Header from './Header'

export default function Layout({ children, home }) {

  const dispatch = useDispatch()
  dispatch(authenticateUser())

  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}