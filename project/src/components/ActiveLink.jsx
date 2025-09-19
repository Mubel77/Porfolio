import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const ActiveLink = ({ to, children, className, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={classNames(
        'relative px-4 py-2 rounded-md transition-all duration-300 group',
        {
          'text-cyan-400 bg-navy-800/50 shadow-magic': isActive,
          'text-gray-300 hover:text-cyan-300 hover:bg-navy-800/30': !isActive,
        },
        className
      )}
      {...props}
    >
      {children}
      <span
        className={classNames(
          'absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300',
          {
            'opacity-100': isActive,
            'opacity-0 group-hover:opacity-70': !isActive,
          }
        )}
      />
    </Link>
  );
};

export default ActiveLink;