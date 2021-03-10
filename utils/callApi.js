import axios from 'axios'

export const callApi = (endPoint, method = 'get', dataPost) => {
  return axios({
    method,
    url: endPoint,
    data: dataPost
  }).catch(err => {
    console.log('err ===>', err);
  })
}