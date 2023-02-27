import Error404 from "../components/Error404.jsx"
import Home from "../components/Home.jsx"
import Compagnie from "../components/Compagnie.jsx"
import Login from "../components/Login";
import Logout from "../components/Logout";
import Admin from "../components/Admin";
import EditAdmin from "../components/EditAdmin";
import ManageShow from "../components/ManageShow";
import ManageDates from "../components/ManageDates";
import EditShow from "../components/EditShow";
import ListDates from "../components/ListDates";
import ListShows from "../components/ListShows";
import Show from "../components/Show";
import Contact from "../components/Contact";


const routes = [
    {path:"/", component:<Home />},
    {path:"/la-compagnie", component:<Compagnie />},
    {path:"/listdates", component:<ListDates />},
    {path:"/listshows", component:<ListShows />},
    {path:"/show/:id", component:<Show />},
    {path:"/contact", component:<Contact />},
    
    {path:"/login", component:<Login />},
    {path:"/logout", component:<Logout />},
    {path:"/admin", component:<Admin />, auth:"admin"},
    {path:"/editadmin/:id", component:<EditAdmin />, auth:"admin"},
    {path:"/manageshows", component:<ManageShow />, auth:"admin"},
    {path:"/editshow/:id", component:<EditShow />, auth:"admin"},
    {path:"/managedates", component:<ManageDates />, auth:"admin"},
    
    {path:"*", component:<Error404 />},
   
]

export default routes