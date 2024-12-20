/** @format */

import { useState } from "react";
import { Routes, Route } from "react-router";
import HeaderDrawer from "./HeaderDrawer";
import Home from "./Home";
import Notes from "./Notes/Notes";
import NewStudents from "./NewStudents/NewStudents";
import AddStudents from "./AddStudent/AddStudents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderDrawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addstudent" element={<AddStudents />} />
          <Route path="/newstudents" element={<NewStudents />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </HeaderDrawer>
    </>
  );
}

export default App;
