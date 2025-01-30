import { NavLink } from "react-router";

// devo dichiarare il tipo per i navabar items in modo da farli funzionare
type NavbarItemProps = {
    href: string,
    label: string
}

// sfrutto props (con il suo tipo creato apposito) per trattarlo come parametro della mia funzione
function NavbarItem(props: NavbarItemProps) {
    
    // render
    return (
        <NavLink to={props.href} end>
            <li key={props.href}>
                {props.label}
            </li>
        </NavLink>
    )
}

export default NavbarItem;