import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboradLayout";
import AppLayout from "../../components/layout/AppLayout";

const RequisitionGeneral = () => {
  const [formData, setFormData] = useState({
    drNumber: "",
    date: "",
    requisitionType: "purchase", // or 'store'
    department: "",
    remarks: "",
  });

  const [items, setItems] = useState([]);

  const addNewRow = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        serialNo: items.length + 1,
        category: "",
        itemName: "",
        uom: "",
        quantity: "",
        estimatedRate: "",
        estimatedAmount: "",
        remarks: "",
      },
    ]);
  };

  return (
    <AppLayout title={"Dashboard | Requisition General"}>
      <DashboardLayout>
        <div className="p-4 lg:p-6 w-full max-w-full">
          <div className="bg-white rounded-lg shadow-md">
            {/* Header */}
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">
                Requisition General Store
              </h1>
            </div>

            {/* Form */}
            <div className="p-4 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* DR Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    DR #
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.drNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, drNumber: e.target.value })
                    }
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>

                {/* Requisition Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Requisition Type
                  </label>
                  <div className="flex flex-col sm:flex-row sm:space-x-4">
                    <label className="inline-flex items-center mb-2 sm:mb-0">
                      <input
                        type="radio"
                        className="form-radio text-blue-600"
                        name="requisitionType"
                        value="purchase"
                        checked={formData.requisitionType === "purchase"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            requisitionType: e.target.value,
                          })
                        }
                      />
                      <span className="ml-2">Purchase Requisition</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-blue-600"
                        name="requisitionType"
                        value="store"
                        checked={formData.requisitionType === "store"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            requisitionType: e.target.value,
                          })
                        }
                      />
                      <span className="ml-2">Store Requisition</span>
                    </label>
                  </div>
                </div>

                {/* Department */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                  >
                    <option value="">Select Department</option>
                    <option value="it">IT</option>
                    <option value="hr">HR</option>
                    <option value="finance">Finance</option>
                  </select>
                </div>

                {/* Remarks */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Remarks
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    value={formData.remarks}
                    onChange={(e) =>
                      setFormData({ ...formData, remarks: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>

              {/* Items Table */}
              <div className="mt-4 lg:mt-8 overflow-x-auto">
                <table className="min-w-full table-auto divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        S.No
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Level 3 Item Category
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Item Name
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        UOM
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estimated Rate
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estimated Amount
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                          {item.serialNo}
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <select className="w-full border-gray-300 rounded-md">
                            <option value="">Select Category</option>
                            {/* Add your categories here */}
                          </select>
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <input
                            type="text"
                            className="w-full border-gray-300 rounded-md"
                          />
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <input
                            type="text"
                            className="w-full border-gray-300 rounded-md"
                          />
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <input
                            type="number"
                            className="w-full border-gray-300 rounded-md"
                          />
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <input
                            type="number"
                            className="w-full border-gray-300 rounded-md"
                          />
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <input
                            type="number"
                            className="w-full border-gray-300 rounded-md"
                            readOnly
                          />
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <input
                            type="text"
                            className="w-full border-gray-300 rounded-md"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add Row Button */}
              <div className="mt-4 lg:mt-6">
                <button
                  onClick={addNewRow}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  + Add New Row
                </button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </AppLayout>
  );
};

export default RequisitionGeneral;
