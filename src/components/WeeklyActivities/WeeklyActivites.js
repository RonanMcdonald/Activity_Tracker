import { useState, useEffect } from 'react';
import { useParams, Route, Navigate, useNavigate, useMatches } from 'react-router-dom';

import WeekHandler from './WeekHandler';

let WEEK_DATA = [
  { week: '32', monday: { task: 'eat cookies', complete: '0' } },
  { week: '34', monday: { task: 'shit out cookies', complete: '1' } },
];

const getCurrentDate = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  return weekNumber;
};

const ActivityPlanner = () => {
  console.log('ActivityPlanner Render');
  var [weekNumber, setWeekNumber] = useState(32);
  var [weekData, setWeekData] = useState([]);

  useEffect(() => {
    console.log('Fetching Week Data...');
    setWeekData(WEEK_DATA);
  }, [weekData]);

  return (
    <>
      <WeekHandler weekNumber={weekNumber} setWeekNumber={setWeekNumber} />
      <div className='content'>{weekData.map((value, index) => value.week == weekNumber && <p key={index}>{value.monday.task}</p>)}</div>
    </>
  );
};

export default ActivityPlanner;
