import { useEffect } from 'react'
import Header from './Header'

export default function Layout({ children, home }) {

  useEffect(() => {
    console.log('effect layout ====>');
  }, [])
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}