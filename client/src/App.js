import "./global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AdminLogin from "./pages/AdminLogin";
import AdminProvider from "./context/AdminContext";
import AdminControl from "./pages/AdminControl";
import CreateBooking from "./pages/CreateBooking";
import GetBookings from "./pages/GetBookings";
import Invoices from "./pages/Invoices";
import SingleBooking from "./pages/SingleBooking";
import SinglePackage from "./pages/SinglePackage";
import TourPackages from "./pages/TourPackages";
import PackageProvider from "./context/PackageContext";
import CreatePackage from "./pages/CreatePackage";
import UpdatePackage from "./pages/UpdatePackage";

function App() {
  return (
    <>
      <Router>
        <AdminProvider>
          <PackageProvider>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/booking" element={<CreateBooking />} />
              <Route
                exact
                path="/booking/allBookings"
                element={<GetBookings />}
              />
              <Route exact path="/invoices" element={<Invoices />} />
              <Route exact path="/booking/:id" element={<SingleBooking />} />
              <Route exact path="/package/:id" element={<SinglePackage />} />
              <Route
                exact
                path="/package/allPackages"
                element={<TourPackages />}
              />
              <Route exact path="/admin/login" element={<AdminLogin />} />
              <Route exact path="/admin" element={<AdminControl />} />
              <Route
                exact
                path="/admin/package/create"
                element={<CreatePackage />}
              />
              <Route
                exact
                path="/admin/package/:id/update"
                element={<UpdatePackage />}
              />
            </Routes>
          </PackageProvider>
        </AdminProvider>
      </Router>
    </>
  );
}

export default App;
