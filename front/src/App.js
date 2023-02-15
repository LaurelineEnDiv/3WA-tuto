import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import AddShow from "./components/AddShow";
import AddDate from "./components/AddDate";
import ListShows from "./components/ListShows";
import Show from "./components/Show";
import UploadFile from "./components/UploadFile";
import AddAdmin from "./components/AddAdmin";
import Login from "./components/Login";

const App = () => {
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/listshows" element={<ListShows />} />
                <Route path="/show/:id" element={<Show />} />
                <Route path="/addshow" element={<AddShow />} />
                <Route path="/adddate" element={<AddDate />} />
                <Route path="/upload" element={<UploadFile />} />
                <Route path="/addadmin" element={<AddAdmin />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
