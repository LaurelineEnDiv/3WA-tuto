import Error404 from "../components/Error404.jsx"
import Home from "../components/Home.jsx"
import Login from "../components/Login";
import Admin from "../components/Admin";
import EditAdmin from "../components/EditAdmin";
import AddShow from "../components/AddShow";
import AddDate from "../components/AddDate";
import ListDates from "../components/ListDates";
import ListShows from "../components/ListShows";
import Show from "../components/Show";


const routes = [
    {path:"/", component:<Home />},
    {path:"/login", component:<Login />},
    {path:"/admin", component:<Admin />, auth:"admin"},
    {path:"/editadmin/:id", component:<EditAdmin />, auth:"admin"},
    {path:"/addshow", component:<AddShow />, auth:"admin"},
    {path:"/adddate", component:<AddDate />, auth:"admin"},
    {path:"/listdates", component:<ListDates />},
    {path:"/listshows", component:<ListShows />},
    {path:"/show/:id", component:<Show />},
    {path:"*", component:<Error404 />},
   
]

export default routes