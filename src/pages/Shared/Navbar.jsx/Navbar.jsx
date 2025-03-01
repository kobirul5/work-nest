import { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import LogoutBtn from '../../../components/LogoutBtn';
import { ThemeContext } from '../../../providers/ThemeProvider';


const Navbar = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation()

    const { theme, toggleTheme } = useContext(ThemeContext)
    console.log(theme)

    const navbarLinks = [
        { name: "Home", pathName: "/" },
        { name: "Dashboard", pathName: "/dashboard" },
        { name: "Contact Us", pathName: "/contact-us" },
        { name: "Blogs", pathName: "/blog" },
    ]

    return (
        <div className='bg-gray-950 text-white backdrop-blur-lg fixed z-10 bg-opacity-50 w-full'>
            <div className="navbar mx-auto  f px-4 container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  gap-2 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navbarLinks.map((i, idx) => <li key={idx}>
                                    <Link className={`${location.pathname === i.pathName && "text-[#2fecec]"} hover:text-[#00a3a3]`} to={i.pathName}>{i.name}</Link>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Link to={"/"} className=" text-white border-none text-xl pl-0 uppercase hover:text-[#00a3a3]">Work Nest</Link>
                        <input type="checkbox" defaultChecked className="toggle border-primary-color bg-primary-color checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500 " />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex flex-row justify-center items-center gap-3 px-1 font-normal ">
                        {
                            navbarLinks.map((i, idx) => <li key={idx}>
                                <Link className={`${location.pathname === i.pathName && "text-[#2fecec] border-b border-[#2fecec]"} hover:text-[#00a3a3]`} to={i.pathName}>{i.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user ? <>
                            <NavLink to="/auth/login" >Login</NavLink>
                            <NavLink to="/auth/signUp" className="ml-4" >Sign Up</NavLink>
                        </> :
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt={user?.name}
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-primary-color text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><LogoutBtn></LogoutBtn></li>
                                </ul>
                            </div>

                    }

                    {/* logged in */}

                </div>
            </div>
        </div>
    );
};

export default Navbar;