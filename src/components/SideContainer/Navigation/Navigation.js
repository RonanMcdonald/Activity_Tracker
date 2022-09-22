import styled from 'styled-components';
import Link from '../Link/Link';

import WeeklyActivities from '../../../assets/images/WeeklyActivities.svg';
import ToDoLists from '../../../assets/images/ToDoLists.svg';
import Bookmarks from '../../../assets/images/Bookmarks.svg';
import Recent from '../../../assets/images/Recent.svg';
import Shared from '../../../assets/images/Share.svg';

// prettier-ignore
const LINK__DATA = [
  { link: 'Weekly Activites', to: '/weekly-activities', icon: WeeklyActivities },
  { link: 'To-Do Lists',      to: '/weekly-activities', icon: ToDoLists },
  { link: 'Bookmarks',        to: '/weekly-activities', icon: Bookmarks },
  { link: 'Recent',           to: '/weekly-activities', icon: Recent },
  { link: 'Shared with me',   to: '/weekly-activities', icon: Shared },
];

const Navigation__Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;

  border-top: 2px solid #edeef1;
`;

const Navigation = () => {
  return (
    <Navigation__Container>
      {LINK__DATA.map((link, index) => (
        <Link key={index} name={link.link} to={link.to} icon={link.icon} />
      ))}
    </Navigation__Container>
  );
};

export default Navigation;
