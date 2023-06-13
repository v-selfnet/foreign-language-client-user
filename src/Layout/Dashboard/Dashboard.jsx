import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/Navbar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../ProviderContext/AuthProvider";
import logo from '/tents-solid.svg'
import { FaBars, FaBookOpen, FaBookmark, FaSignOutAlt, FaUserAlt, FaWallet } from "react-icons/fa";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(() => {navigate('/') })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <NavBar></NavBar>



            <div className="drawer lg:drawer-open">

            <button htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden absolute top-0 right-10 text-xl"><FaBars /></button>


                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer-2" className="drawer-button lg:hidden absolute top-0 left-10"><FaSignOutAlt /></label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL ? user.photoURL : logo} />
                            </div>
                            <p>{user?.displayName ? user.displayName : user?.email}</p>
                        </div>

                        <div className="divider"></div>
                        <li><Link to='studentprofile'><FaUserAlt /> My Profile</Link></li>
                        <li><Link to='#'><FaBookmark/>Favourite Classes</Link></li>
                        <li><Link to='#'><FaBookOpen/>Enrolled Classes</Link></li>
                        <li><Link to='#'><FaWallet />Payment History</Link></li>
                        <div className="divider"></div>
                        <li>
                            <button onClick={handleLogout} className="flex justify-center text-xl">
                            <FaSignOutAlt />Exit</button>
                        </li>




                    </ul>

                </div>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default Dashboard;