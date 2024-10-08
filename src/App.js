import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Signup from "./Page/Signup/Signup";
import Login from "./Page/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Page/ForgotPassword/ForgotPassword";
import Setting from "./Page/Setting/Settings";
import CreateProduct from "./Page/CreateProduct/CreateProduct";
import EditProduct from "./Page/EditProduct/EditProduct";
import ProductPage from "./Page/ProductPage/ProductPage";
import CheckoutPage from "./Page/Checkout/CheckoutPage";

function App() {
  // console.log(window,"nnn");
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/product/new" element={<CreateProduct />} />
          <Route path="/Product/:productId/edit" element={<EditProduct />} />
          <Route path="/Product/:productId" element={<ProductPage />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          {/* <Route path="/order/new" element={<CheckoutPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
