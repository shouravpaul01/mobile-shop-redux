import { FaBars, FaBorderAll, FaCircleUser, FaHouse, FaRightToBracket, FaUser } from "react-icons/fa6"
import { Link, NavLink, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content md:px-3">
        {/* Page content here */}
        <div className="navbar min-h-[40px]  md:bg-gray-100 md:rounded-md md:mt-5 md:py-0  border-b md:border-none border-violet-700">
          <div className="md:flex-1">
            <label
              htmlFor="my-drawer-2"
              className="flex md:hidden btn btn-square btn-ghost drawer-button "
            >
              <FaBars className="text-xl" />
            </label>
          </div>

          {/* This Content hidden when screen size is 480px */}
          <div className="flex-none">
            <div className="flex items-center gap-2 md:hidden">
              <img src={''} className="w-14  " alt="ju-logo" />

              <p className="text-xl font-bold  text-violet-800">
                BD Cinema House
              </p>
            </div>
          </div>
          <div className="flex-none ">
            <div className="md:flex  justify-end hidden">
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-sm btn-ghost btn-circle avatar"
                >
                  <FaCircleUser className="text-2xl" />
                </div>
                <ul
                  tabIndex={0}
                  className="menu-item dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={""}>
                      <FaUser /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link  to={""}>
                      <FaRightToBracket /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 md:mx-10 my-12">
          {/* Page content here */}
          <Outlet />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="min-h-full  w-80  bg-gray-100  ">
          <div className="flex flex-col items-center gap-2 border-b p-4 mb-4">
            <div className="relative ">
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-dotted border-violet-800 rounded-full animate-spin p-4"></div>
              <img
                src={''}
                className="w-14 md:w-16 absolute top-3 left-3 md:left-4 opacity-85"
                alt="ju-logo"
              />
            </div>

            <div className="text-center pb-3 font-bold ">
              <p className="text-xl md:text-2xl text-violet-800">
                Mobile Shop
              </p>
            </div>
            <div>
              {/* <Link
                className="flex md:hidden btn btn-sm btn-primary"
                onClick={() => handleLogout()}
              >
                <FaRightToBracket /> Logout
              </Link> */}
            </div>
          </div>
          <ul className="menu-item p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink
                to={"/dashboard"}
                end
                className={({ isActive }) =>
                  isActive ? "menu-item-active" : ""
                }
              >
                <FaHouse /> Dashboard
              </NavLink>
              <NavLink
                to={"/dashboard/category"}
                className={({ isActive }) =>
                  isActive ? "menu-item-active" : ""
                }
              >
                <FaBorderAll /> Brand
              </NavLink>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
