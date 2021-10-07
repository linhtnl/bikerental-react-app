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
import styles from './index.scss'

const CreateVoucher = () => {
  return (
    <>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="inputVoucherName">Voucher Name</CFormLabel>
                <CFormInput id="inputVoucherName" placeholder="Voucher Name" value="" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputDescription">Description</CFormLabel>
                <CFormInput
                  type="text"
                  id="inputDescription"
                  placeholder="Discount 20% off total purchase, maximun is 20000VND"
                  value=""
                />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputDiscountPercent">Discount Percent</CFormLabel>
                <CFormInput
                  type="text"
                  id="inputDiscountPercent"
                  placeholder="10%, 20%,  30% ..."
                  value=""
                />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputMaxAmount">Max Amount</CFormLabel>
                <CFormInput type="text" id="inputMaxAmount" placeholder="50.000 VNĐ" value="" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputStartDate">Starting Date</CFormLabel>
                <CFormInput id="inputStartDay" type="date" placeholder="dd/mm/yyy" value="" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputEndDate">End Date</CFormLabel>
                <CFormInput id="inputEndDate" type="date" placeholder="dd/mm/yyy" value="" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputRemain">Remain</CFormLabel>
                <CFormInput type="text" id="inputRemain" placeholder="100" value="" />
              </CCol>
              <CCol xs={12}>
                <p align="center">
                  <CButton id="createButton" type="submit">
                    Create
                  </CButton>
                </p>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </>
  )
}

export default CreateVoucher
