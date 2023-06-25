import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import NavBar from "../../Pages/Shared/Navbar/NavBar";
import logo from '/tents-solid.svg'
import { FaBars, FaBookOpen, FaBookmark, FaClock, FaMoneyCheckAlt, FaSignOutAlt, FaUserAlt, FaUsersCog, FaWallet } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import useAdmin from '../../Hooks/useAdmin'

const Dashboard = () => {
    const {user, logOut} = useAuth();
    const navigate = useNavigate();

    // const isAdmin = true;
    const [isAdmin] = useAdmin()

    const handleLogout = () => {
        logOut()
            .then(() => { navigate('/') })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Helmet><title>Summer Camp | Dashboard</title></Helmet>
            <NavBar></NavBar>

            <div className="drawer lg:drawer-open">

                <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden absolute top-0 right-10 text-xl"><FaBars /></label>

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <h1 className="my-10">Dashboard! Welcome <br />
                        <span className="text-red-600 text-3xl">{user?.displayName ? user.displayName : user?.email}</span>
                    </h1>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-green-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className="flex flex-col justify-center items-center">
                            <label className="w-20 h-20 rounded-full btn btn-ghost border-4 btn-circle avatar">
                                <img className="rounded-full" src={user?.photoURL ? user.photoURL : logo} />
                            </label>
                            <p>{user?.displayName ? user.displayName : user?.email}</p>
                        </div>

                        <div className="divider"></div>

                        {
                            isAdmin ?
                            <>
                                <li><Link to='adminprofile'><FaUserAlt /> Admin Profile</Link></li>
                                <li><Link to='manageusers'><FaUsersCog />Manage Users</Link></li>
                                <li><Link to='managecourses'><FaBookOpen />Manage Courses</Link></li>
                                <li><Link to='manageschedule'><FaClock />Manage Schedule</Link></li>
                                <li><Link to='manageaccount'><FaWallet />Manage Payment</Link></li>

                            </> : <>
                                <li><Link to='studentprofile'><FaUserAlt /> My Profile</Link></li>
                                <li><Link to='favorite'><FaBookmark />Favourite Classes</Link></li>
                                <li><Link to='enroll'><FaBookOpen />Enrolled Classes</Link></li>
                                <li><Link to='#'><FaMoneyCheckAlt />Payment History</Link></li>

                            </>
                        }



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