import { NavLink, useSearchParams } from 'react-router';
import classNames from 'classnames';

export const Navbar = () => {
  const isHasActiveClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', {
      'has-background-grey-lighter': isActive,
    });
  };

  const [searchParams] = useSearchParams();

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink className={isHasActiveClass} to="/">
            Home
          </NavLink>

          <NavLink
            className={isHasActiveClass}
            to={`/people?${searchParams.toString()}`}
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
