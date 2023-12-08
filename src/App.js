import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from "./component/Login/Login"
import Signup from "./component/Signup/Singup";
import ChitDetails from "./component/ChitDetails/ChitDetails";
import PayDue from "./component/PayDue/PayDue";
import Payment from "./component/Payment/Payment";
import ClosedDue from "./component/ClosedDue/ClosedDue";
import Home from "./component/Home/Home";
// import ForgetMobileNumber from "./component/ForgetPassword/ForgetMobileNumber";
// import ConfirmPassword from "./component/ForgetPassword/ConfirmPassword";
// import ForgetOtp from "./component/ForgetPassword/ForgetOtp"
import ForgetPassword from "./component/ForgetPassword/ForgetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-chit" element={<ChitDetails />} />
          <Route path="/my-profile" element={<PayDue />} />
          <Route path="/chit-details" element={<Payment />} />
          <Route path="/closed-due" element={<ClosedDue />} />
          {/* <Route path="/forget-mobile-number" element={<ForgetMobileNumber />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          <Route path="/forget-otp" element={<ForgetOtp />} /> */}
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
