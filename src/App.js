import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';

import SideContainer from './components/SideContainer/SideContainer';
import WeeklyActivities from './components/WeeklyActivities/WeeklyActivites';

const ContentContainer = styled.div`
  flex: 1;
`;

const getCurrentDate = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  return weekNumber;
};

function App() {
  console.log('App Render');
  return (
    <BrowserRouter>
      <GlobalStyle />
      <SideContainer />
      <ContentContainer>
        <Routes>
          <Route path='/' element={<WeeklyActivities />} />
          <Route path='/weekly-activities/'>
            <Route path='' element={<WeeklyActivities />} />
            {/* <Route path='' element={<Navigate to={getCurrentDate().toString()} replace />} /> */}
          </Route>
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  );
}

export default App;
