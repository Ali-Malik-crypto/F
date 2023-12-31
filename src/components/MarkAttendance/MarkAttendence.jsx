import React, { useState } from 'react'
import SideBAR from '../SideBAR'
import "../../index.css";
import { useNavigate } from 'react-router-dom';

const MarkAttendence = () => {
  const navigate = useNavigate();
  const handleClickfor1=()=>{
    console.log("Clicked 1st Year");
    navigate('/MarkAttendence/FirstSections')
    // console.log(navigate);
  };

  const handleClickfor2=()=>{
    console.log("Clicked 2nd Year");
    navigate('/MarkAttendence/SecondSections')
    // console.log(navigate);
  };

  const handleClickfor3=()=>{
    console.log("Clicked 3rd Year");
    navigate('/MarkAttendence/ThirdSections')
    // console.log(navigate);
  };
  return (
    <div>
      <SideBAR>
        <h1>MarkAttendence</h1>
        <div className='VA_main'>
          <div className='classes' id='first_year' onClick={handleClickfor1}>1st Year</div>
          <div className='classes' id='second_year' onClick={handleClickfor2}>2nd Year</div>
          <div className='classes' id='third_year' onClick={handleClickfor3}>3rd Year</div>
        </div>
      </SideBAR>
    </div>
  )
}

export default MarkAttendence;


