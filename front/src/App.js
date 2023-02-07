import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import AddShow from "./components/AddShow";
import ListShows from "./components/ListShows";
import Show from "./components/Show";

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
            </Routes>
        </BrowserRouter>
    )
}

export default App;
