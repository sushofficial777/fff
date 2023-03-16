/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map((route, index) => {
     console.log(route.display);
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/manager" ||
        route.layout === "/user" ||
        route.layout === "/tl" 
      ) {
        return (
          <Link key={index} to={route.layout + "/" + route.path}>
            <div className={`${
                    activeRoute(route.path) === true
                      ?  ` ${route.display} bg-white  px-3 dark:text-white relative mb-3 flex hover:cursor-pointer rounded-md py-2 duration-200`
                      : `${route.display} relative mb-3 flex hover:cursor-pointer px-3  py-2 rounded-md duration-200 hover:bg-navy-700 `
                  }`}>
              <li
                className="my-[3px] flex cursor-pointer items-center "
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-brand-500 dark:text-navy-500"
                      : "font-medium text-white"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 flex ms-4 ${
                    activeRoute(route.path) === true
                      ? "font-bold text-navy-700 dark:text-navy-600"
                      : "font-medium text-white"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div class="absolute top-px h-11 w-1  rounded-lg bg-brand-500 end-0 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;
