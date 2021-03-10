import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './Header'

export default function Layout({ children, home }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}