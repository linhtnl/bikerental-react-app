import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import getUserAPI from 'src/api/getUserAPI'
import { DocsExample } from 'src/components'
import avatar8 from './../../assets/images/avatars/8.jpg'

function OwnerDetail() {
  const [owner, setOwner] = useState([])
  const windowURL = window.location.href

  useEffect(() => {
    let id = null
    const fetchOwnerList = async () => {
      try {
        const ownerList = await getUserAPI.getAllOwner()
        ownerList.map((owner) => {
          if (windowURL.includes(owner.id)) {
            setOwner(owner)
            console.log(owner.id)
          }
        })
        console.log(owner)
      } catch (error) {
        console.log('Failed to fetch list: ', error)
      }
    }
    fetchOwnerList()
  }, [])

  return (
    <>
      <CAvatar src={avatar8} size="md" />
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CForm className="row g-3">
              <CCol xs={12}>
                <CFormLabel htmlFor="inputName">Full Name</CFormLabel>
                <CFormInput id="inputName" placeholder="Full name" value="Nuyễn văn A" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputEmail4">Email</CFormLabel>
                <CFormInput type="email" id="inputEmail4" value="test@gamil.com" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputPhone">Phone</CFormLabel>
                <CFormInput type="text" id="inputPhone" value="0123456789" />
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
                <CFormInput id="inputAddress" placeholder="1234 Main St" value="1234 Main St" />
              </CCol>
              <CCol xs={12}>
                <CButton type="submit">Submit change</CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default OwnerDetail
