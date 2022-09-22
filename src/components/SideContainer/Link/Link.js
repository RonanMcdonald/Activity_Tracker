import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(RouterLink)`
  color: #113654;
  text-decoration: none;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const Link__Wrapper = styled.div`
  display: flex;
  gap: 13px;
`;

const Icon = styled.img`
  height: 18px;
  width: 18px;
`;

const Link = ({ name, to, icon }) => {
  return (
    <>
      <Link__Wrapper>
        <Icon src={icon} alt='' />
        <StyledLink to={to}>{name}</StyledLink>
      </Link__Wrapper>
    </>
  );
};

export default Link;
