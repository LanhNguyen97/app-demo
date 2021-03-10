import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import styled from 'styled-components';
import Checkbox from '../components/CheckBox';
import Product from '../components/Product';
import { callApi } from '../utils/callApi';

const Title = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Categories = (props) => {
  const { dataCategories, dataProduct } = props;
  const [state, setState] = useImmer({
    activeCategory: '',
    data: [],
  })

  let _isMounted = true;

  const setStateCommon = objects => {
    if (_isMounted) {
      Object.keys(objects).forEach(key => {
        setState(draft => {
          draft[key] = objects[key];
        });
      });
    }
  };

  const filterProductsByCategory = (categoryId) => {
    const data = dataProduct.filter(item => item.categoryId == categoryId)
    setStateCommon({ activeCategory: categoryId, data })
  }

  useEffect(() => {
    if (dataCategories.length > 0) {
      filterProductsByCategory(dataCategories[0].categoryId);
    }

    return () => {
      _isMounted = false;
    }
  }, [dataCategories, dataProduct])

  const onChange = (name) => {
    filterProductsByCategory(name);
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div>Categories</div>
          {dataCategories.map(item => {
            return (
              <Checkbox
                key={item.name}
                label={item.name}
                checked={state.activeCategory === item.categoryId}
                name={item.categoryId}
                onChange={onChange}
              />
            )
          })}
        </div>
        <div className="col-md-9">
          <div className="row">
            {state.data.map(item => {
              return (
                <div className="col-6 col-md-6 col-lg-3" key={item.name}>
                  <Product product={item} key={item.name} />
                </div>)
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {

  const res = await callApi(
    'https://5e1fc92ee31c6e0014c6000e.mockapi.io/api/category',
    'get',
  )
  const resProduct = await callApi(
    'https://5e1fc92ee31c6e0014c6000e.mockapi.io/api/product',
    'get',
  )

  return {
    props: {
      dataCategories: res ? res.data : [],
      dataProduct: resProduct ? resProduct.data : []
    }
  }
}

export default Categories;