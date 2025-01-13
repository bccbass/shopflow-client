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
import Login from './Login'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderDrawer>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/addstudent" element={<AddStudents />} />
          <Route path="/newstudents" element={<NewStudents />} />
          <Route path="/repairs" element={< Repairs />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/archive" element={< ArchivedLeads />} />
          <Route path="*" element={< RouteNotFound />} />
        </Routes>
      </HeaderDrawer>
    </>
  );
}

export default App;
