/** @format */

import { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router";
import HeaderDrawer from "./HeaderDrawer";
import Home from "./Home";
import Notes from "./Notes/Notes";
import NewStudents from "./NewStudents/NewStudents";
import AddStudents from "./AddStudent/AddStudents";
import ArchivedLeads from "./ArchivedLeads/ArchivedLeads";
import Repairs from "./Repairs/Repairs";
import Orders from "./Orders/Orders";
import RouteNotFound from "./RouteNotFound";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute";
import { UserContext } from "./UserContext";

function App() {
  const { user } = useContext(UserContext);
  const [count, setCount] = useState(0);

  return (
    <HeaderDrawer>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/addstudent"
          element={
            <PrivateRoute>
              <AddStudents />
            </PrivateRoute>
          }
        />
        <Route
          path="/newstudents"
          element={
            <PrivateRoute>
              <NewStudents />
            </PrivateRoute>
          }
        />
        <Route
          path="/repairs"
          element={
            <PrivateRoute>
              <Repairs />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes"
          element={
            <PrivateRoute>
              <Notes />
            </PrivateRoute>
          }
        />
        <Route
          path="/archive"
          element={
            <PrivateRoute>
              <ArchivedLeads />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </HeaderDrawer>
  );
}

export default App;
