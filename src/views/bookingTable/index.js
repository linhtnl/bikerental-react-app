import {
  CCard,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'

const BookingTable = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CTable striped hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Full name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Phone Number</CTableHeaderCell>
                <CTableHeaderCell scope="col">Number Of Bike</CTableHeaderCell>
                <CTableHeaderCell scope="col">Rating</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>Test 1</CTableDataCell>
                <CTableDataCell>Test 1</CTableDataCell>
                <CTableDataCell>Test 1</CTableDataCell>
                <CTableDataCell>Test 1</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell>Test 2</CTableDataCell>
                <CTableDataCell>Test 2</CTableDataCell>
                <CTableDataCell>Test 2</CTableDataCell>
                <CTableDataCell>Test 2</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default BookingTable
