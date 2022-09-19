import styled from 'styled-components';
import Link from './Link';

const StyledNavigation = styled.div`
  background-color: greenyellow;
  border: 2px solid blue;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <div>Navigaiton</div>
      <Link></Link>
    </StyledNavigation>
  );
};

export default Navigation;
