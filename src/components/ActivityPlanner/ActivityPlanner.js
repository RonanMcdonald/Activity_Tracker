import { useState } from 'react';
import { useParams, Route, Navigate, useNavigate, useMatches } from 'react-router-dom';

let DATA = [];

const getCurrentDate = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  return weekNumber;
};

const WeekHandler = () => {
  return (
    <div className='Wrapper'>
      <span>previous</span>
      <span>week</span>
      <span>previous</span>
    </div>
  );
};

const ActivityPlanner = () => {
  const [weekNumber, setWeekNumber] = useState(0);
  const navigate = useNavigate();

  var apple = true;

  if (apple == true) {
    apple = false;
  }

  const param = useParams();
  console.log(param);
  if (param.id === undefined) {
    navigate('/weekly-activities/' + getCurrentDate());
  }

  return (
    <>
      <WeekHandler></WeekHandler>
    </>
  );
};

export default ActivityPlanner;
