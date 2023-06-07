import Error404 from "./../components/Error404.jsx";
import Home from "./../components/Home.jsx";
import Compagnie from "./../components/Compagnie.jsx";
import ListDates from "./../components/ListDates";
import ListShows from "./../components/ListShows";
import Show from "./../components/Show";
import Contact from "./../components/Contact";
import Pro from "./../components/Pro";
import Login from "./../components/Login";
/////////////////////ADMIN///////////////////////
import Logout from "./../components/admin/Logout";
import Admin from "./../components/admin/Admin";
import EditAdmin from "./../components/admin/EditAdmin";
import EditPassword from "./../components/admin/EditPassword";
import ManageTeam from "./../components/admin/ManageTeam";
import ManageShow from "./../components/admin/ManageShow";
import ManageDates from "./../components/admin/ManageDates";
import ManagePro from "./../components/admin/ManagePro";
import EditTeamMember from "./../components/admin/EditTeamMember";
import EditShow from "./../components/admin/EditShow";
import EditShowPictures from "./../components/admin/EditShowPictures";
import EditText from "./../components/admin/EditText";
import ManageText from "./../components/admin/ManageText";
import ManagePartners from "./../components/admin/ManagePartners";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/la-compagnie", component: <Compagnie /> },
  { path: "/agenda", component: <ListDates /> },
  { path: "/spectacles", component: <ListShows /> },
  { path: "/show/:id", component: <Show /> },

  { path: "/contact", component: <Contact /> },
  { path: "/pro", component: <Pro /> },
  { path: "/login", component: <Login /> },

  /////////////////////ADMIN///////////////////////
  { path: "/logout", component: <Logout />, auth: "admin" },
  { path: "/admin", component: <Admin />, auth: "admin" },
  { path: "/editadmin/:id", component: <EditAdmin />, auth: "admin" },
  { path: "/editpassword/:id", component: <EditPassword />, auth: "admin" },
  { path: "/gestion-equipe", component: <ManageTeam />, auth: "admin" },
  { path: "/gestion-spectacles", component: <ManageShow />, auth: "admin" },
  { path: "/editteammember/:id", component: <EditTeamMember />, auth: "admin" },
  { path: "/editshow/:id", component: <EditShow />, auth: "admin" },
  {
    path: "/editshowpictures/:id",
    component: <EditShowPictures />,
    auth: "admin",
  },
  { path: "/gestion-agenda", component: <ManageDates />, auth: "admin" },
  { path: "/gestion-pro", component: <ManagePro />, auth: "admin" },
  {
    path: "/gestion-partenaires",
    component: <ManagePartners />,
    auth: "admin",
  },
  { path: "/gestion-textes", component: <ManageText />, auth: "admin" },
  { path: "/edittext/:id", component: <EditText />, auth: "admin" },

  { path: "*", component: <Error404 /> },
];

export default routes;
