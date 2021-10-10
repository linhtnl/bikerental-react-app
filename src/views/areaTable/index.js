import {
  CCard,
  CCol,
  CNavItem,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'
import { render } from 'enzyme'
import React, { Component } from 'react'
import getUserAPI from 'src/api/getUserAPI'
import callApi from './../../utils/apiCaller.js'

class AreaTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listArea: [],
      apiURL: '',
    }
  }

  componentDidMount() {
    callApi('areas?page=1', 'GET', null).then((res) => {
      this.setState({
        listArea: res.data.data,
      })
    })
  }

  render() {
    const { listArea } = this.state

    console.log(listArea)
    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Area Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Postal code</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {listArea.map((item) => (
                  <CTableRow key={item.id}>
                    <CTableDataCell>{item.postalCode}</CTableDataCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCard>
        </CCol>
      </CRow>
    )
  }
}

export default AreaTable
