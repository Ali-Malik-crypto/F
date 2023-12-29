import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Users/DeleteUser.css";
import SideBAR from '../SideBAR';

const SectionA = () => {
  const navigate = useNavigate();
  const handleClickforMonthlyAttendence=()=>{
    console.log("MonthlyAttendance");
    navigate('/MarkAttendence/MonthlyAttendance')
  };

  const handleClickforWeeklyAttendance=()=>{
    console.log("WeeklyAttendance");
    navigate('/MarkAttendence/WeeklyAttendance')
  };

  const handleClickforTodayStatus=()=>{
    console.log("TodayStatus");
    navigate('/MarkAttendence/TodayStatus')
  };

  const [students, setStudents] = useState([
    { id: 1, name: 'Ali Ismail' },
    { id: 2, name: 'Muneeb Baig aka (BACKEND)' },
    { id: 3, name: 'Hafiz Awais aka (HAFIZ SUSTI)' },
  ]);

  return (
    <div>
      <SideBAR>
        <div className='user_h'>
          <h1>1st YEAR</h1>
          <div className='user_Management'>
            <h2>SECTION A</h2>
            <ul className='users'>
              {students.map((students) => (
                <li key={students.id}>
                  {students.name}{' '}
                  <label>
                  <button id='btnA1' className='button' onClick={handleClickforMonthlyAttendence}>Monthly Attendance</button>
                  </label>
                  <label>
                  <button id='btnC1' className='button' onClick={handleClickforWeeklyAttendance}>Weekly Attendance</button>
                  </label>
                  <label>
                  <button id='btnD1' className='button' onClick={handleClickforTodayStatus}>Today Status</button>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SideBAR>
    </div>
  );
}

export default SectionA;

