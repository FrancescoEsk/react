// devo dichiarare il tipo per i navabar items in modo da farli funzionare
type NavbarItemProps = {
    href: string,
    label: string
}

// sfrutto props (con il suo tipo creato apposito) per trattarlo come parametro della mia funzione
function NavbarItem(props: NavbarItemProps) {
    
    // render
    return (
        <li key={props.href}>
            <a href={props.href}> {props.label} </a>
        </li>
    )
}

export default NavbarItem;