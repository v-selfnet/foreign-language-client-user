import { Link, useNavigate } from "react-router-dom";
import logo from '/tents-solid.svg'
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();

    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(() => { navigate('/') })
            .catch(error => console.error(error))
    }

    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/insdetail'>Instructors</Link></li>
        <li><Link to='/coursedetail'>Courses</Link></li>
        {
            user &&
            <li>
                <Link to={isAdmin ? '/dashboard/manageusers' : '/dashboard/studentprofile'}>Dashboard</Link>
            </li>
        }


        {/* {
            isAdmin ? <li><Link to="/dashboard/manageusers">Dashboard</Link></li> :
                <li><Link to="/dashboard/studentprofile">Dashboard</Link></li>
        } */}


        {
            user ?
                <>
                    <li><button onClick={handleLogout}>Signout</button></li>
                </> : <>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/signin'>Signin</Link></li>
                </>
        }

    </>

    return (
        <div className="navbar bg-green-400 px-10 py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link to='/'><span className="text-2xl font-semibold">Multi Tongue</span><br /><span className="text-xl">Summer Camp</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {
                    user ?
                        <>
                            <Link to='/dashboard/studentprofile' className="flex items-center gap-3">
                                {user?.displayName ? user.displayName : user?.email}
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL ? user.photoURL : logo} />
                                    </div>
                                </label>
                            </Link>
                        </> : <>
                            <Link to='/signin'>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={logo} />
                                    </div>
                                </label>
                            </Link>
                        </>

                }
            </div>
        </div>
    );
};

export default NavBar;