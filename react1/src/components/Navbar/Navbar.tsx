import NavbarItem from '../Navbar-item/NavbarItem';
import './Navbar.css';

const navbarElements = [
    {label: 'Home', href: '/'},
    {label: 'Projects', href: '/projects'},
    {label: 'Contacts', href: '/contacts'}
]

type NavbarItemProps = {
    children?: React.ReactNode;
}

function Navbar(props: NavbarItemProps) {
    
    // render 
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {
                    navbarElements.map(element => {
                        return (
                            <NavbarItem href={element.href} label={element.label} key={element.href}/>
                        )
                    })
                }
            </ul>

            {props.children}

        </nav>
    );
}

export default Navbar;