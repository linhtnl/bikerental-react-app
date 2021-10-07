import axiosClient from './axiosClient'
const getUserAPI = {
  getAllCustomer: () => {
    const url = '/admins/customers'
    return axiosClient.get(url)
  },
  getAllOwner: () => {
    const url = '/owners'
    return axiosClient.get(url)
  },
  getOwnerById: (id) => {
    const url = `/owners/${id}`
    return axiosClient.get(url)
  },
  getVoucher: () => {
    const url = '/vouchers'
    return axiosClient.get(url)
  },
}
export default getUserAPI
