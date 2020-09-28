import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import CustomerList from "./components/CustomerList";
import LoginPage from "./pages/LoginPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import UserConstext from "./contexts/UserContext";
import ChangeCustomer from "./components/ChangeCustomer";
import LayoutSimple from "./components/LayoutSimple";

function App() {
  const [user, setUser] = useState(null);
  const [customerList, setCustomerList] = useState(null);

  return (
    <div>
      <UserConstext.Provider
        value={{ user, setUser, customerList, setCustomerList }}
      >
        <Switch>
          <Route
            path="/customer/:id"
            render={(props) => {
              return (
                <LayoutSimple>
                  <CustomerDetailPage {...props} />
                </LayoutSimple>
              );
            }}
          ></Route>
          <Route
            path="/edit-customer/:id"
            render={(props) => {
              return (
                <LayoutSimple>
                  <ChangeCustomer {...props} />
                </LayoutSimple>
              );
            }}
          ></Route>

          <Route path="/home">
            <LayoutSimple>
              <CustomerList />
            </LayoutSimple>
          </Route>
          <Route path="/login">
            <LayoutSimple>
              <LoginPage />
            </LayoutSimple>
          </Route>

          <Route path="/">
            <LayoutSimple>
              <Register />
            </LayoutSimple>
          </Route>
        </Switch>
      </UserConstext.Provider>
    </div>
  );
}

export default App;
