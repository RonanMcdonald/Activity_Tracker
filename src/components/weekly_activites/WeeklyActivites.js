import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import WeekHandler from './week_handler/week_handler';
import Input from './input/Input';
import Filter from './filter/Filter';

// Assets
import CheckboxEmpty from '../../assets/images/CheckboxEmpty.svg';
import CheckboxFilled from '../../assets/images/CheckboxFilled.svg';

// Data
import WEEK_DATA from '../../data/WEEK_DATA.json';

const getCurrentWeek = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  return Math.ceil(Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000)) / 7);
};

const ActivityPlanner = () => {
  // Data Handling
  var [weekData, setWeekData] = useState([]);
  // Fetch data
  useEffect(() => {
    console.log('Fetching Week Data...');
    setWeekData(WEEK_DATA);
  }, []);

  // Try get week number from local-storage
  var [weekNumber, setWeekNumber] = useState(JSON.parse(localStorage.getItem('weekNumber')) || getCurrentWeek());
  useEffect(() => {
    localStorage.setItem('weekNumber', JSON.stringify(weekNumber));
  }, [weekNumber]);

  const handleDelete = (id) => {
    setWeekData((weekData) => weekData.filter((element) => element.id !== id));
  };

  const handleComplete = (id) => {
    setWeekData((current) => current.map((obj) => (obj.id === id ? { ...obj, complete: !obj.complete } : obj)));
  };

  const handleAdd = (obj) => {
    setWeekData([...weekData, obj]);
  };

  const currentWeekData = weekData.filter((element) => element.week == weekNumber);
  function getActivitesByDay(day) {
    var activites = [];
    activites = currentWeekData.filter((element) => element.day == day);
    return activites;
  }

  var componentArray = [];
  var availableDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  availableDays.forEach((element) => {
    var activitiesArr = getActivitesByDay(`${element}`);
    activitiesArr.length != 0 &&
      componentArray.push(
        <Day_Container>
          <Day>{element}</Day>
          <Activity_Wrapper>
            {activitiesArr.map((e) => (
              <Activity key={e.id} tag={e.tagColor} complete={e.complete} draggable='true'>
                <ClickableArea type={'click'} onClick={() => handleComplete(e.id)}>
                  <Checkbox>{e.complete ? <img src={CheckboxFilled} alt='' /> : <img src={CheckboxEmpty} alt='' />}</Checkbox>
                  <p>{e.activity}</p>
                </ClickableArea>
                <ClickableArea type={'drag'} />
              </Activity>
            ))}
          </Activity_Wrapper>
        </Day_Container>
      );
  });

  // getCurrentWeekRange - Gets minimum and maximum dates for current week number
  var firstDate = new Date(23, 0, 1 + (weekNumber - 1) * 7);
  var lastDate = new Date(23, 0, 1 + (weekNumber - 1) * 7 + 6);
  const options = { weekday: 'long', month: 'short', day: '2-digit' };
  firstDate = firstDate.toLocaleDateString('en-US', options);
  lastDate = lastDate.toLocaleDateString('en-US', options);

  return (
    <>
      <WeekHandler weekNumber={weekNumber} setWeekNumber={setWeekNumber} />
      <Content>
        <Page_Header>
          <p>Activities</p>
          <Date_Range>
            <p>{firstDate}</p>
            <p>-</p>
            <p>{lastDate}</p>
          </Date_Range>
        </Page_Header>
        <Input></Input>
        {/* <Filter></Filter> */}
        <Activity_Container>{componentArray}</Activity_Container>
      </Content>
    </>
  );
};

// Styled Components
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Page_Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  color: #643fdb;
  font-weight: 500;
  font-size: 18px;
`;

const Date_Range = styled.span`
  display: flex;
  gap: 5px;
`;

const Activity_Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Activity_Wrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const Day_Container = styled.div``;

const Day = styled.p`
  color: #643fdb;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 8px;
`;

const Activity = styled.div`
  display: flex;
  align-items: stretch;

  background-color: white;

  border-left: solid 15px ${(props) => `#${props.tag}` || '#EC30FD'};
  color: ${(props) => (props.complete ? '#415E76' : '#113654')};
  text-decoration: ${(props) => props.complete && 'line-through'};

  p {
    font-size: 18px;
    font-weight: 500;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
  }
`;

const ClickableArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0px 8px 15px;
  min-height: 100%;

  cursor: pointer;

  flex: ${(props) => props.type === 'drag' && 1};
  cursor: ${(props) => props.type === 'drag' && 'default'} !important;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
`;

export default ActivityPlanner;
