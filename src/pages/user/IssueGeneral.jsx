import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboradLayout";
import AppLayout from "../../components/layout/AppLayout";

const IssueGeneral = () => {
  const [formData, setFormData] = useState({
    giNumber: "",
    issueDate: "",
    store: "",
    requisitionType: "withoutRequisition", // or 'onRequisition'
    issueToUnit: "",
    demandNo: "",
    vehicleType: "",
    issueToDepartment: "",
    vehicleNo: "",
    driver: "",
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
        grnQty: "",
        previousIssueQty: "",
        balanceQty: "",
        issueQty: "",
        remarks: "",
      },
    ]);
  };

  return (
    <AppLayout title={"Dashboard | Issuance General Store"}>
      <DashboardLayout>
        <div className="p-4 lg:p-6 w-full max-w-full">
          <div className="bg-white rounded-lg shadow-md">
            {/* Header */}
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">
                Issuance General Store
              </h1>
            </div>

            {/* Form */}
            <div className="p-4 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* GI Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GI #
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.giNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, giNumber: e.target.value })
                    }
                  />
                </div>

                {/* Issue Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.issueDate}
                    onChange={(e) =>
                      setFormData({ ...formData, issueDate: e.target.value })
                    }
                  />
                </div>

                {/* Store */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Store
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.store}
                    onChange={(e) =>
                      setFormData({ ...formData, store: e.target.value })
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
                        value="withoutRequisition"
                        checked={formData.requisitionType === "withoutRequisition"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            requisitionType: e.target.value,
                          })
                        }
                      />
                      <span className="ml-2">Without Requisition</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-blue-600"
                        name="requisitionType"
                        value="onRequisition"
                        checked={formData.requisitionType === "onRequisition"}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            requisitionType: e.target.value,
                          })
                        }
                      />
                      <span className="ml-2">On Requisition</span>
                    </label>
                  </div>
                </div>

                {/* Issue to Unit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issue to Unit
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.issueToUnit}
                    onChange={(e) =>
                      setFormData({ ...formData, issueToUnit: e.target.value })
                    }
                  />
                </div>

                {/* Demand No */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Demand No
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.demandNo}
                    onChange={(e) =>
                      setFormData({ ...formData, demandNo: e.target.value })
                    }
                  />
                </div>

                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Type
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.vehicleType}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleType: e.target.value })
                    }
                  />
                </div>

                {/* Issue to Department */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issue to Department
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.issueToDepartment}
                    onChange={(e) =>
                      setFormData({ ...formData, issueToDepartment: e.target.value })
                    }
                  />
                </div>

                {/* Vehicle No */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle No
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.vehicleNo}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleNo: e.target.value })
                    }
                  />
                </div>

                {/* Driver */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Driver
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.driver}
                    onChange={(e) =>
                      setFormData({ ...formData, driver: e.target.value })
                    }
                  />
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
                        GRN Qty
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Previous Issue Qty
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Balance Qty
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Issue Qty
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

export default IssueGeneral;