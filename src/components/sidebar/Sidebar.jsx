import { ArrowRightCircle } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { Button } from '../button/Button';
import { Text } from '../text/Text';
import { navLinks } from './navLinks';

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  //   const [loading, setLoading] = useState(false);

  //   const { logout } = useAuth();

  //   const handleLogOut = () => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       logout();
  //       setLoading(false);
  //     }, 1000);
  //   };

  return (
    <div className="relative m-2 mr-4 h-[98%] rounded-md =">
      <div className={` ${open ? 'w-52' : 'w-20 '}  relative duration-300`}>
        <ArrowRightCircle
          className={`absolute -right-3 top-16 h-6 w-6 cursor-pointer rounded-full border-2 text-primary  ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center p-5 m-0 gap-x-4">
          <Text
            type="b"
            className={`m-0 text-2xl text-primary duration-200 ${!open && 'flex flex-col'}`}
          >
            My
            <span className={`${!open && 'text-xs'}`}> Sidebar</span>
          </Text>
        </div>
        <span className="block h-3" />
        <nav className="scrollable-div  h-full max-h-[79vh] w-full overflow-y-scroll p-5">
          {navLinks.map((section, index) => (
            <React.Fragment key={index}>
              {open ? (
                <h1 className={`mt-4 text-xs font-medium  text-textColor-light opacity-50 `}>
                  {section.title}
                </h1>
              ) : (
                <div className="w-full h-1 my-2 rounded-full bg-neutral-200" />
              )}
              <ul>
                {section.links.map((link, linkIndex) => (
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'pending'
                        : isActive
                          ? `flex cursor-pointer items-center ${
                              !open && 'justify-center'
                            } rounded-md p-2 text-lg font-semibold text-blue-500 transition-all duration-200 hover:bg-accent hover:text-foreground`
                          : `flex cursor-pointer items-center ${
                              !open && 'justify-center'
                            } rounded-md p-2 text-lg font-semibold text-textColor transition-all duration-200 hover:bg-accent hover:text-foreground`
                    }
                    to={link.path}
                    key={linkIndex}
                    title={link.title}
                  >
                    <li className={`s flex cursor-pointer items-center gap-4 rounded-md text-sm`}>
                      {link.icon}
                      <span className={`${!open && 'hidden opacity-0'} origin-left`}>
                        {link.title}
                      </span>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </nav>
      </div>
      {/* <div
        className={`fixed bottom-6 flex h-12 2xl:bottom-4 ${
          open ? 'w-52  p-3 ' : 'bottom-2 w-20 p-1'
        } items-center justify-between  bg-white text-lg font-semibold transition-all duration-200 ease-in-out hover:cursor-pointer`}
      >
        <Button className="w-full" onClick={() => handleLogOut()} loading={loading}>
          Logout
        </Button>
      </div> */}
    </div>
  );
};
