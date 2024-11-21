import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RequisitionGeneral from "./pages/user/RequisitionGeneral";
import POGeneral from "./pages/user/POGeneral";
import GRNReturnGeneral from "./pages/user/GRNReturnGeneral";
import IssueGeneral from "./pages/user/IssueGeneral";
import IssueReturnGeneral from "./pages/user/IssueReturnGeneral";
// import GeneralAdjustment from "./pages/user/GeneralAdjustment";
import GRNGeneral from "./pages/user/GRNGeneral";
import UserProfile from "./pages/user/UserProfile";
import NotFound from "./pages/user/NotFound";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import PrivateRoute from "./pages/auth/PrivateRoute"; // Import the PrivateRoute component
import Loader from "./utils/Loader";

const App = () => {
  const { user, loader } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  if (!loader) {
    return <Loader />;
  }

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute user={!user} redirect="/">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute user={!user} redirect="/">
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/requisition-general"
          element={<PrivateRoute element={RequisitionGeneral} />}
        />
        <Route
          path="/po-general"
          element={<PrivateRoute element={POGeneral} />}
        />
        <Route
          path="/grn-return-general"
          element={<PrivateRoute element={GRNReturnGeneral} />}
        />
        <Route
          path="/grn-general"
          element={<PrivateRoute element={GRNGeneral} />}
        />
        <Route
          path="/issue-general"
          element={<PrivateRoute element={IssueGeneral} />}
        />
        <Route
          path="/issue-return-general"
          element={<PrivateRoute element={IssueReturnGeneral} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute element={UserProfile} />}
        />
        {/* <Route path="/general-adjustment" element={<GeneralAdjustment />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
