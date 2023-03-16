import React, {useEffect , useState} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
// import Footer from "components/footer/Footer";
import routes from "../../employees_routes";

export default function Employees(props) {
  const { ...rest } = props;
  
  const location = useLocation();
  console.log(location);
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Dashboard");

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    
    return routes.map((prop, key) => {
   
      if (prop.layout === "/user") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  
  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} routes={routes} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Fliuo Travel"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes(routes)}

                {/* <Route
                  path="/auth/sign-in"
                  element={<Navigate to="/admin/Dashboard" replace />}
                /> */}
              </Routes>
            </div>
            {/* <div className="p-3">
              <Footer />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}
