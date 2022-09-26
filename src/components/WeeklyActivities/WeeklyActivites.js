import { useState, useEffect } from 'react';
import { useParams, Route, Navigate, useNavigate, useMatches } from 'react-router-dom';

import WeekHandler from './WeekHandler';

import WEEK_DATA from '../../data/WEEK_DATA.json';

const getCurrentDate = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  return weekNumber;
};

const ActivityPlanner = () => {
  console.log('Weekly Activites Render');
  var [weekNumber, setWeekNumber] = useState(JSON.parse(localStorage.getItem('weekNumber')) || getCurrentDate());
  var [weekData, setWeekData] = useState([]);

  // Instantiate weekData
  useEffect(() => {
    console.log('Fetching Week Data...');
    setWeekData(WEEK_DATA);
  }, [weekData]);

  // Local-Storage week number
  useEffect(() => {
    localStorage.setItem('weekNumber', JSON.stringify(weekNumber));
    console.log(JSON.parse(localStorage.getItem('weekNumber')));
  }, [weekNumber]);

  weekData.map((value, index) => console.log(value));

  // Render
  return (
    <>
      <WeekHandler weekNumber={weekNumber} setWeekNumber={setWeekNumber} />
      <div className='content'>{weekData.map((value, index) => value.week == weekNumber && <p key={index}>{value.monday.task}</p>)}</div>
    </>
  );
};

export default ActivityPlanner;
