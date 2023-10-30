import {  NavLink } from "react-router-dom";

const Navbar = () => {

    const ulLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-blue-700" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-blue-700" : ""
            }
        >
            About
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-blue-700" : ""
            }
        >
            Blog
        </NavLink>
        <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-blue-700" : ""
            }
        >
            Login
        </NavLink>
    </>

    return (
        <div className="navbar bg-base-100 container mx-auto justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5 text-lg font-bold">
                        {
                            ulLinks
                        }
                    </ul>
                </div>
                <a className=" normal-case text-xl font-bold">Fitness Goal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 text-lg font-semibold">
                    {
                        ulLinks
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;