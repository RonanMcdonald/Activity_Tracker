import styled from 'styled-components';

import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';

const Side__Container = styled.div`
  min-width: 250px;
  background: #fff;
`;

const SideContainer = () => {
  return (
    <Side__Container>
      <Logo />
      <Navigation />
    </Side__Container>
  );
};

export default SideContainer;
