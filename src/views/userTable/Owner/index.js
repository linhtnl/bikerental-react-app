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

function OwnerTable() {
  const [OwnerList, setOwnerList] = useState([])
  useEffect(() => {
    const fetchOwnerList = async () => {
      try {
        const response = await getUserAPI.getAllOwner()
        setOwnerList(response)

        OwnerList.map((owner) => console.log(owner.id))
      } catch (error) {
        console.log('Failed to fetch list: ', error)
      }
    }
    fetchOwnerList()
  }, [])

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
              {OwnerList.map((item) => (
                <CTableRow key={item.id}>
                  <CTableDataCell className="fullName" onClick={() => console.log(item.fullname)}>
                    <Link
                      to={{
                        pathname: '/OwnerDetail',
                        hash: item.id,
                      }}
                    >
                      {item.fullname}
                    </Link>
                  </CTableDataCell>
                  <CTableDataCell>{item.phoneNumber}</CTableDataCell>
                  <CTableDataCell>{item.numberOfBikes}</CTableDataCell>
                  <CTableDataCell className="numOfRating">{item.numberOfRatings}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default OwnerTable
