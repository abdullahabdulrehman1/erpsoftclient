import React from "react";
import DashboardLayout from "../../components/layout/DashboradLayout";
import AppLayout from "../../components/layout/AppLayout";
const GeneralAdjustment = () => {
  return (
    <AppLayout title={"Dashboard | General Adjustment"}>
      <DashboardLayout>
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold mb-4">PO General</h1>
          </div>
        </div>
      </DashboardLayout>
    </AppLayout>
  );
};

export default GeneralAdjustment;

