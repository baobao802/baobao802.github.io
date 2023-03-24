import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';
import Logo from './Logo';

const tConfigs = resolveConfig(tailwindConfig);
const mdScreen = parseInt(
  String(tConfigs.theme.screens.md).replace(/^\D+/g, ''),
);

export default function Header({ navLinks = [] }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const { width, height } = useWindowSize();

  const closeMenu = () => setMenuToggle(false);
  const toggleMenu = () => setMenuToggle((prev) => !prev);

  useEffect(() => {
    if (width >= mdScreen) {
      setMenuToggle(false);
    }
  }, [width]);

  return (
    <header className='layout-header' data-collapsed={menuToggle}>
      <nav>
        <Link to='/'>
          <Logo />
        </Link>

        <ul>
          {navLinks.map(({ id, path, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link nav-link__active' : 'nav-link'
                }
                to={path}
                onClick={closeMenu}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className='btn-hamburger'
          data-toggle={menuToggle ? 'on' : 'off'}
          onClick={toggleMenu}
        />
      </nav>
    </header>
  );
}
