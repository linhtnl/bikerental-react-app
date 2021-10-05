import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import getUserAPI from 'src/api/getUserAPI'
import { DocsExample } from 'src/components'
import styles from './index.scss'

function CustomerTable() {
  const [customerList, setCustomerList] = useState([])
  useEffect(() => {
    console.log('LIstttt:')
    const fetchCustomerList = async () => {
      try {
        const response = await getUserAPI.getAll()
        setCustomerList(response)

        customerList.map((customer) => console.log(customer.id))
        console.log(customerList)
      } catch (error) {
        console.log('Failed to fetch list: ', error)
      }
    }
    fetchCustomerList()
  }, [])

  function isChecked(item) {
    if (item === false) {
      return false
    } else return true
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Full name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Phone Number</CTableHeaderCell>
                <CTableHeaderCell scope="col">Reward point</CTableHeaderCell>
                <CTableHeaderCell scope="col">Active</CTableHeaderCell>
                <CTableHeaderCell scope="col">DeActive</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {customerList.map((item) => (
                <CTableRow key={item.id}>
                  <CTableDataCell>{item.fullname}</CTableDataCell>
                  <CTableDataCell>{item.phoneNumber}</CTableDataCell>
                  <CTableDataCell>{item.rewardPoints}</CTableDataCell>
                  <CTableDataCell>
                    <CFormCheck
                      inline
                      type="radio"
                      name={item.id}
                      id={item.id}
                      value={item.isBanned}
                      checked={item.isBanned === true || item.isBanned === null}
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormCheck
                      inline
                      type="radio"
                      name={item.id}
                      id={item.id}
                      value={item.isBanned}
                      checked={item.isBanned === false}
                    />
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CustomerTable
