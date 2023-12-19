import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm2";
import RegisterForm from "./components/RegisterationForm";
import BillingForm from "./components/BillingForm";
import YogaRegistrationForm from "./components/CheckEvent";
import EditBatch from "./components/EditBatch";
import { PaymentDone } from "./components/PaymentDone";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/billing-form/:id" element={<BillingForm />} />
            <Route path="/check-event" element={<YogaRegistrationForm />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/edit-batch/:id" element={<EditBatch />} />
            <Route path="/payment-success" element={<PaymentDone />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
