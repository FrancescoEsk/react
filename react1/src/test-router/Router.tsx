import ContactsPage from "../pages/contacts/ContactsPage";
import HomePage from "../pages/home/HomePage";
import ProjectsPage from "../pages/projects/ProjectsPage";

function Router() {

    const path = window.location.pathname; // ottiene il pathname del posto in cui ci troviamo es. /contacts

    console.log("Path", path)

    // questa funzione fa esattamente ciò che il Router di react-router fa. semplicemente fatto a mano

    if ( path === '/')
        return <HomePage />
    else if (path === '/projects')
        return <ProjectsPage />
    else if (path === '/contacts')
        return <ContactsPage/>
    else 
        return (
            <p>404</p>
        )
}

export default Router;