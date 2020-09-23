import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Register from "./components/Register";
import CustomerList from "./components/CustomerList";
import LoginPage from "./pages/LoginPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import UserConstext from "./contexts/UserContext";
import ChangeCustomer from "./components/ChangeCustomer";

function App() {
  const [user, setUser] = useState(null);
  const [customerList, setCustomerList] = useState(null);

  return (
    <div>
      <UserConstext.Provider
        value={{ user, setUser, customerList, setCustomerList }}
      >
        <Switch>
          <Route path="/customer/:id" component={CustomerDetailPage} />
          <Route path="/edit-customer/:id" component={ChangeCustomer} />

          <Route path="/home">
            <CustomerList />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </UserConstext.Provider>
    </div>
  );
}

export default App;
