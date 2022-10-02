import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';

import SideContainer from './components/SideContainer/SideContainer';
import WeeklyActivities from './components/weekly_activites/WeeklyActivites';

const ContentContainer = styled.div`
  flex: 1;
`;

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
