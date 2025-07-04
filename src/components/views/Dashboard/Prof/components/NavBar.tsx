import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SiderbarData } from "./SiderbarData";
import { IconContext } from "react-icons";
import { StyleBody } from "./styles";

const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: "orange" }}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaBars />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>

            </nav>
        </IconContext.Provider>
    )
}
