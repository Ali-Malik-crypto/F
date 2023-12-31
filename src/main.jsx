import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import SideBAR from "./components/SideBAR";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addstudent from "./components/Students/Addstudent";
import Dashboard from "./components/Dashboard";
import MarkAttendence from "./components/MarkAttendance/MarkAttendence";
import ViewAttendence from "./components/ViewAttendance/ViewAttendence";
import Reports from "./components/Reports";
import Fine from "./components/Fine";
import SectionA1 from "./components/Classes/FirstYear/SectionA";
import SectionA2 from "./components/Classes/SecondYear/SectionA";
import SectionA3 from "./components/Classes/ThridYear/SectionA";
import SectionB1 from "./components/Classes/FirstYear/SectionB";
import SectionB2 from "./components/Classes/SecondYear/SectionB";
import SectionB3 from "./components/Classes/ThridYear/SectionB";
import ModifyStudent from "./components/Students/ModifyStudent";
import AddUser from "./components/Users/AddUser";
import DeleteUser from "./components/Users/DeleteUser";
import ModifyUser from "./components/Users/ModifyUser";
import Error from "./components/Error";
import PermissionList from "./components/Users/PermissionList";
import ModifyStu from "./components/Students/ModifyStu";
import Modification from "./components/Users/Modification";
import FirstSections from "./components/ViewAttendance/FirstSections";
import SecondSections from "./components/ViewAttendance/SecondSections";
import ThirdSections from "./components/ViewAttendance/ThirdSections";
import FirstSectionA from "./components/ViewAttendance/FirstSectionA";
import FirstSectionB from "./components/ViewAttendance/FirstSectionB";
import SecondSectionA from "./components/ViewAttendance/SecondSectionA";
import SecondSectionB from "./components/ViewAttendance/SecondSectionB";
import ThirdSectionA from "./components/ViewAttendance/ThirdSectionA";
import ThirdSectionB from "./components/ViewAttendance/ThirdSectionB";
import ModifyFirstStu from "./components/Students/ModifyFirstStu";
import ModifySecond from "./components/Students/ModifySecond";
import ModifyThird from "./components/Students/ModifyThird";
import ModifyFristStuA from "./components/Students/ModifyFirstStuA";
import ModifyFristStuB from "./components/Students/ModifyFirstStuB";
import ModifySecondA from "./components/Students/ModifySecondA";
import ModifySecondB from "./components/Students/ModifySecondB";
import ModifyThirdA from "./components/Students/ModifyThirdA";
import ModifyThirdB from "./components/Students/ModifyThirdB";
import DeleteStudent from "./components/Students/DeleteStudent";
import DeleteFirst from "./components/Students/DeleteFirst";
import DeleteSecond from "./components/Students/DeleteSecond";
import DeleteThird from "./components/Students/DeleteThird";
import DeleteFirstA from "./components/Students/DeleteFirstA";
import DeleteFirstB from "./components/Students/DeleteFirstB";
import DeleteSecondA from "./components/Students/DeleteSecondA";
import DeleteSecondB from "./components/Students/DeleteSecondB";
import DeleteThirdA from "./components/Students/DeleteThirdA";
import DeleteThirdB from "./components/Students/DeleteThirdB";

import MFirstSections from "./components/MarkAttendance/FirstSections";
import MSecondSections from "./components/MarkAttendance/SecondSections";
import MThirdSections from "./components/MarkAttendance/ThirdSections";
import MFirstSectionA from "./components/MarkAttendance/FirstSectionA";
import MFirstSectionB from "./components/MarkAttendance/FirstSectionB";
import MSecondSectionA from "./components/MarkAttendance/SecondSectionA";
import MSecondSectionB from "./components/MarkAttendance/SecondSectionB";
import MThirdSectionA from "./components/MarkAttendance/ThirdSectionA";
import MThirdSectionB from "./components/MarkAttendance/ThirdSectionB";



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />}> </Route>
      <Route path="/Dashboard" element={<Dashboard />}> </Route>
      <Route path="/MarkAttendence" element={<MarkAttendence />}> </Route>
      <Route path="/ViewAttendence" element={<ViewAttendence />}></Route>
      <Route path="/ViewAttendence/FirstSections" element={<FirstSections />} />
      <Route path="/ViewAttendence/SecondSections" element={<SecondSections />} />
      <Route path="/ViewAttendence/ThirdSections" element={<ThirdSections />} />
      <Route path="/ViewAttendence/FirstSections/FirstSectionA" element={<FirstSectionA />} />
      <Route path="/ViewAttendence/FirstSections/FirstSectionB" element={<FirstSectionB />} />
      <Route path="/ViewAttendence/SecondSections/SecondSectionA" element={<SecondSectionA />} />
      <Route path="/ViewAttendence/SecondSections/SecondSectionB" element={<SecondSectionB />} />
      <Route path="/ViewAttendence/ThirdSections/ThirdSectionA" element={<ThirdSectionA />} />
      <Route path="/ViewAttendence/ThirdSections/ThirdSectionB" element={<ThirdSectionB />} />
      <Route path="/Reports" element={<Reports />}> </Route>
      <Route path="/Fine" element={<Fine />}> </Route>
      <Route path="/Students/ModifyFirstStu" element={<ModifyFirstStu />} />
      <Route path="/Students/ModifySecond" element={<ModifySecond />} />
      <Route path="/Students/ModifyThird" element={<ModifyThird />} />
      <Route path="/Students/ModifyFirstStu/ModifyFirstStuA" element={<ModifyFristStuA />} />
      <Route path="/Students/ModifyFirstStu/ModifyFirstStuB" element={<ModifyFristStuB />} />
      <Route path="/Students/ModifySecond/ModifySecondA" element={<ModifySecondA />} />
      <Route path="/Students/ModifySecond/ModifySecondB" element={<ModifySecondB />} />
      <Route path="/Students/ModifyThird/ModifyThirdA" element={<ModifyThirdA />} />
      <Route path="/Students/ModifyThird/ModifyThirdB" element={<ModifyThirdB />} />
      <Route path="/Students/DeleteFirst" element={<DeleteFirst />} > </Route>
      <Route path="/Students/DeleteSecond" element={<DeleteSecond />} > </Route>
      <Route path="/Students/DeleteThird" element={<DeleteThird />} > </Route>
      <Route path="/Students/DeleteFirst/DeleteFirstA" element={<DeleteFirstA />} > </Route>
      <Route path="/Students/DeleteFirst/DeleteFirstB" element={<DeleteFirstB />} > </Route>
      <Route path="/Students/DeleteSecond/DeleteSecondA" element={<DeleteSecondA />} > </Route>
      <Route path="/Students/DeleteSecond/DeleteSecondB" element={<DeleteSecondB />} > </Route>
      <Route path="/Students/DeleteThird/DeleteThirdA" element={<DeleteThirdA />} > </Route>
      <Route path="/Students/DeleteThird/DeleteThirdB" element={<DeleteThirdB />} > </Route>

      <Route path="/MarkAttendence/FirstSections" element={<MFirstSections />} />
      <Route path="/MarkAttendence/SecondSections" element={<MSecondSections />} />
      <Route path="/MarkAttendence/ThirdSections" element={<MThirdSections />} />
      <Route path="/MarkAttendence/FirstSections/FirstSectionA" element={<MFirstSectionA />} />
      <Route path="/MarkAttendence/FirstSections/FirstSectionB" element={<MFirstSectionB />} />
      <Route path="/MarkAttendence/SecondSections/SecondSectionA" element={<MSecondSectionA />} />
      <Route path="/MarkAttendence/SecondSections/SecondSectionB" element={<MSecondSectionB />} />
      <Route path="/MarkAttendence/ThirdSections/ThirdSectionA" element={<MThirdSectionA />} />
      <Route path="/MarkAttendence/ThirdSections/ThirdSectionB" element={<MThirdSectionB />} />
      
      {/* Classes */}
      <Route path="/classes" >
        <Route path="first-Year" >
          <Route path="section-A" element={<SectionA1 />} />
          <Route path="section-B" element={<SectionB1 />} />
        </Route>

        <Route path="second-Year" >
          <Route path="section-A" element={<SectionA2 />} />
          <Route path="section-B" element={<SectionB2 />} />
        </Route>

        <Route path="third-Year">
          <Route path="section-A" element={<SectionA3 />} />
          <Route path="section-B" element={<SectionB3 />} />
        </Route>
      </Route>

      {/* Students */}
      <Route path="Students" >
        <Route path="Addstudent" element={<Addstudent />} />
        <Route path="delete-Student" element={<DeleteStudent />} />
        <Route path="modify-Student" element={<ModifyStudent />} />
        <Route path="modifystu" element={<ModifyStu />} />
      </Route>

      {/* Users */}
      <Route path="Users" >
        <Route path="add-User" element={<AddUser />} />
        <Route path="delete-User" element={<DeleteUser />} />
        <Route path="modify-User" element={<ModifyUser />} />
        <Route path="modification" element={<Modification />} />
        <Route path="permissionList" element={<PermissionList />} />
      </Route>


      {/* Error */}
      <Route path="*" element={<Error />}> </Route>










      {/* <Route path="/Addstudent" element={ <Addstudent /> }></Route> */}
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);