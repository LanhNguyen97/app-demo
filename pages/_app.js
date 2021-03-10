import { withRouter } from 'next/router'
import { Provider } from 'react-redux'

import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import { useStore } from '../redux/store';

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)


  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default withRouter(App)