import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {useSelector} from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation();
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 pe-2">
            <Link to="/Kanbas/Account/Signin" id="wd-signin-link"
                  className={`list-group-item text-danger border border-0
                          ${pathname.includes("Signin") ? "list-group-item active" : ""}`}>
                Sign in
            </Link>
            <Link to="/Kanbas/Account/Signup" id="wd-signup-link"
                  className={`list-group-item text-danger border border-0
                          ${pathname.includes("Signup") ? "list-group-item active" : ""}`}>
                Sign up
            </Link>
            <Link to="/Kanbas/Account/Profile" id="wd-profile-link"
                  className={`list-group-item text-danger border border-0
                          ${pathname.includes("Profile") ? "list-group-item active" : ""}`}>
                Profile
            </Link>
        </div>
    );
}
