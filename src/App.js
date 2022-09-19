import styled from 'styled-components';
import Navigation from './components/Navigation';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <div className='sitecontent' style={{ backgroundColor: 'brown', flex: '1' }}>
        Beans
      </div>
    </>
  );
}

export default App;
