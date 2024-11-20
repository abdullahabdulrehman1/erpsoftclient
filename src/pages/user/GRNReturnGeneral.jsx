import React, { useState } from "react";
import DashboardLayout from "../../components/layout/DashboradLayout";
import AppLayout from "../../components/layout/AppLayout";

const GRNReturnGeneral = () => {
  const [formData, setFormData] = useState({
    grnrNumber: "",
    grnrDate: "",
    grnNumber: "",
    grnDate: "",
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
        unit: "",
        grnQty: "",
        previousReturnQty: "",
        balanceGrnQty: "",
        returnQty: "",
        remarks: "",
      },
    ]);
  };

  return (
    <AppLayout title={"Dashboard | GRN Return General Store"}>
      <DashboardLayout>
        <div className="p-4 lg:p-6 w-full max-w-full">
          <div className="bg-white rounded-lg shadow-md">
            {/* Header */}
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">
                GRN Return General Store
              </h1>
            </div>

            {/* Form */}
            <div className="p-4 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* GRNR Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GRNR #
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.grnrNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, grnrNumber: e.target.value })
                    }
                  />
                </div>

                {/* GRNR Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GRNR Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.grnrDate}
                    onChange={(e) =>
                      setFormData({ ...formData, grnrDate: e.target.value })
                    }
                  />
                </div>

                {/* GRN Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GRN #
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.grnNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, grnNumber: e.target.value })
                    }
                  />
                </div>

                {/* GRN Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GRN Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.grnDate}
                    onChange={(e) =>
                      setFormData({ ...formData, grnDate: e.target.value })
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
                        Action
                      </th>
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
                        Unit
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        GRN Qty
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Previous Return Qty
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Balance GRN Qty
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Return Qty
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
                          <button
                            onClick={() =>
                              setItems(items.filter((i) => i.id !== item.id))
                            }
                            className="text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </td>
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

export default GRNReturnGeneral;