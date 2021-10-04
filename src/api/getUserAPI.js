import axiosClient from './axiosClient'
const getUserAPI = {
  getAll: () => {
    const url = '/customers'
    return axiosClient.get(url)
  },
}
export default getUserAPI
