import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Styles from "./layout.module.css";
import { ROUTES } from "../../lib/constant";

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menuItems = [
    {
      id: 1,
      title: "Active Sprints",
      pathname: "/" + ROUTES.ACTIVE_SPRINT,
      isActive: pathname === "/" + ROUTES.ACTIVE_SPRINT,
    },
    {
      id: 2,
      title: "Backlogs",
      pathname: "/" + ROUTES.BACKLOGS,
      isActive: pathname === "/" + ROUTES.BACKLOGS,
    },
  ];

  return (
    <div>
      <div className={[Styles.header]}>
        <h1>Header</h1>
      </div>

      <div className={[Styles.sidebar_outlet_container]}>
        <div className={[Styles.sidebar]}>
          <div className={[Styles.sidebar_menu_container]}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`${Styles.btn} ${
                  item.isActive ? Styles.btn_active : ""
                }`}
                onClick={() => navigate(item.pathname)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
