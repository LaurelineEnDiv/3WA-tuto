import Error404 from "../components/Error404.jsx"
import Home from "../components/Home.jsx"
import Login from "../components/Login";
import AddAdmin from "../components/AddAdmin";
import AddShow from "../components/AddShow";
import AddDate from "../components/AddDate";
import ListDates from "../components/ListDates";
import ListShows from "../components/ListShows";
import Show from "../components/Show";

const routes = [
    {path:"/", component:<Home />},
    {path:"/login", component:<Login />},
    {path:"/addadmin", component:<AddAdmin />, auth:"admin"},
    {path:"/addshow", component:<AddShow />, auth:"admin"},
    {path:"/adddate", component:<AddDate />, auth:"admin"},
    {path:"/listdates", component:<ListDates />},
    {path:"/listshows", component:<ListShows />},
    {path:"/show/:id", component:<Show />},
    {path:"*", component:<Error404 />},
   
]

export default routes