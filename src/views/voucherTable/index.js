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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function VoucherTable() {
  const [VoucherList, setVoucherList] = useState([])
  useEffect(() => {
    const fetchVoucherList = async () => {
      try {
        const response = await getUserAPI.getVoucher()
        setVoucherList(response)

        VoucherList.map((owner) => console.log(owner.id))
      } catch (error) {
        console.log('Failed to fetch list: ', error)
      }
    }
    fetchVoucherList()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Voucher Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                <CTableHeaderCell scope="col">Discount Percent</CTableHeaderCell>
                <CTableHeaderCell scope="col">Max Amount</CTableHeaderCell>
                <CTableHeaderCell scope="col">Starting date</CTableHeaderCell>
                <CTableHeaderCell scope="col">End date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Remain</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {VoucherList.map((item) => (
                <CTableRow key={item.id}>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.description}</CTableDataCell>
                  <CTableDataCell>{item.discountPercent}</CTableDataCell>
                  <CTableDataCell>
                    <div>
                      {item.discountAmount}
                      <p> VNĐ</p>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>{item.startingDate}</CTableDataCell>
                  <CTableDataCell>{item.expiredDate}</CTableDataCell>
                  <CTableDataCell>{item.voucherItemsRemain}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default VoucherTable
