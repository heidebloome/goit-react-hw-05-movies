import { NavLink, Outlet } from "react-router-dom";
import { Nav } from "./Navigation.styled";

const Navigation = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </Nav>
            <Outlet />
        </>
    )
}

export default Navigation;