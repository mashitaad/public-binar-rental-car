import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { customerGetAllOrder, orderSelector } from "../../../features/orderSlice";
import AllPaymentStatus from "./payment-status/AllPaymentStatus";
import NotPaidPaymentStatus from "./payment-status/NotPaidPaymentStatus";

export default function IndexPayment() {
const dispatch = useDispatch()

useEffect(() => {
    dispatch(customerGetAllOrder())
}, [])

const data = useSelector(orderSelector.selectCustomerAllOrders)


  return (
    <>
      <div className="container">
        <div>
          <Tabs
            defaultActiveKey="payment-all"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="payment-all" title="Semua">
             <AllPaymentStatus data = {data} />
              </Tab>
            <Tab eventKey="payment-pending" title="Belum Bayar">
            <NotPaidPaymentStatus data = {data} />
            </Tab>
            <Tab eventKey="payemnt-onprocces" title="Sedang Diproses">
            <h1>content</h1>
            </Tab>
            <Tab eventKey="payment-confirmation" title="Sudah DiKonfirmasi">
            <h1>content</h1>
            </Tab>
            <Tab eventKey="payment-finish" title="Selesai">
            <h1>content</h1>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}