import { NavLink, Outlet } from "react-router-dom";
import { Nav } from "./Navigation.styled";

export const Navigation = () => {
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