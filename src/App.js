import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';

import SideContainer from './components/SideContainer/SideContainer';
import ActivityPlanner from './components/ActivityPlanner/ActivityPlanner';

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
  console.log(getCurrentDate());
  return (
    <BrowserRouter>
      <GlobalStyle />
      <SideContainer />
      <ContentContainer>
        <Routes>
          <Route path='/' element={<ActivityPlanner />} />
          <Route path='/weekly-activities/'>
            <Route path=':id' element={<ActivityPlanner />} />
            <Route path='' element={<ActivityPlanner />} />
            {/* <Route path='' element={<Navigate to={getCurrentDate().toString()} replace />} /> */}
          </Route>
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  );
}

export default App;
