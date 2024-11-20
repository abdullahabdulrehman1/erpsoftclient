import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Register from "./pages/auth/Register";
import RequisitionGeneral from "./pages/user/RequisitionGeneral";
import POGeneral from "./pages/user/POGeneral";
import GRNReturnGeneral from "./pages/user/GRNReturnGeneral";
import IssueGeneral from "./pages/user/IssueGeneral";
import IssueReturnGeneral from "./pages/user/IssueReturnGeneral";
import GeneralAdjustment from "./pages/user/GeneralAdjustment";
import GRNGeneral from "./pages/user/GRNGeneral";
const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/requisition-general" element={<RequisitionGeneral />} />
        <Route path="/po-general" element={<POGeneral />} />
        <Route path="/grn-return-general" element={<GRNReturnGeneral />} />
        <Route path="/grn-general" element={<GRNGeneral />} />
        <Route path="/issue-general" element={<IssueGeneral />} />
        <Route path="/issue-return-general" element={<IssueReturnGeneral />} />
        <Route path="/general-adjustment" element={<GeneralAdjustment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
