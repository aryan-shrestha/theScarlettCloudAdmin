import React from "react";
import { MainContainer } from "../../../components";
import { useFetch } from "../../../hooks";

const OrderDetail = () => {
  const { data, loading } = useFetch("");
  return (
    <MainContainer>
      <div className="p-4">
        <form action="">
          <div
            id="formHeader"
            className="flex justify-between items-center mb-4"
          >
            <h1 className="text-xl">Order Id: #00000000</h1>
            <button
              type="submit"
              className="bg-gray-950 hover:bg-gray-800 text-white px-6 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
          <div className="order__form-container grid grid-cols-2 gap-4">
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="orderIdInput">
                Order Id
              </label>
              <input
                type="text"
                id="orderIdInput"
                readOnly
                className="p-2 border-[1px] border-gray-400 rounded-lg"
                value={"orderId"}
              />
            </div>
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="orderStatusInput">
                Order Status
              </label>
              <select
                id="ordedrStatusInput"
                className="p-2 border-[1px] border-gray-400 rounded-md"
              >
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                readOnly
                className="p-2 border-[1px] border-gray-400 rounded-lg"
              />
            </div>
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                readOnly
                className="p-2 border-[1px] border-gray-400 rounded-lg"
              />
            </div>
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="phoneNo">
                Phone no
              </label>
              <input
                type="text"
                id="phoneNo"
                readOnly
                className="p-2 border-[1px] border-gray-400 rounded-lg"
              />
            </div>
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="emailAddress">
                Email Address
              </label>
              <input
                type="text"
                id="emailAddress"
                readOnly
                className="p-2 border-[1px] border-gray-400 rounded-lg"
              />
            </div>
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="addressLine1">
                Address Line 1
              </label>
              <input
                type="text"
                id="addressLine1"
                readOnly
                className="p-2 border-[1px] border-gray-400 rounded-lg"
              />
            </div>
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="addressLine2">
                Address Line 2
              </label>
              <input
                type="text"
                id="addressLine2"
                readOnly
                className="p-2 border-[1px] border-gray-400 rounded-lg"
              />
            </div>
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="vat">
                VAT
              </label>
              <input
                type="text"
                id="vat"
                readOnly
                className="p-2 border-[1px] border-gray-400 rounded-lg"
              />
            </div>
            <div className="input-container flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="grandTotal">
                Grand Total
              </label>
              <input
                type="text"
                id="grandTotal"
                readOnly
                className="p-2 border-[1px] border-gray-400 rounded-lg"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-1">
              <label className="text-gray-700" htmlFor="orderNote">
                Order Note
              </label>
              <textarea
                id="orderNote"
                cols="30"
                rows="3"
                className="p-2 border-[1px] border-gray-400 rounded-lg"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </MainContainer>
  );
};

export default OrderDetail;
