/** @format */

import { useState } from "react";
import { Routes, Route } from "react-router";
import HeaderDrawer from "./HeaderDrawer";
import Home from "./Home";
import Notes from "./Notes/Notes";
import NewStudents from "./NewStudents/NewStudents";
import AddStudents from "./AddStudent/AddStudents";
import ArchivedLeads from "./ArchivedLeads/ArchivedLeads";
import Repairs from "./Repairs/Repairs";
import RouteNotFound from "./RouteNotFound";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HeaderDrawer>
      <Routes>
        <Route
          path="/login"
          element={
              <Login />
          }
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
