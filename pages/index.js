import { callApi } from '../utils/callApi'
import Product from '../components/Product'

export default function Home({ data }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center list-product my-3">LIST PRODUCT</div>
        <div className="col-12">
          <div className="row">
            {
              data.map(product => {
                return (
                  <div className="col-6 col-md-4 col-lg-3" key={product.name}>
                    <Product product={product} key={product.name} />
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  const res = await callApi(
    'https://5e1fc92ee31c6e0014c6000e.mockapi.io/api/product',
    'get',
  )

  return {
    props: {
      data: res ? res.data : []
    }
  }
}