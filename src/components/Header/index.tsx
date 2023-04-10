import { HeaderContainer } from './styles';
import { Scroll, Timer } from 'phosphor-react';

import pomodoroLogo from '../../assets/pomodoro_logo.svg';
import { NavLink } from 'react-router-dom';

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <span>
        <img src={pomodoroLogo} alt='' />
      </span>
      <nav>
        <NavLink to='/' title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='History'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
