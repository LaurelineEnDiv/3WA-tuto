import { BrowserRouter } from "react-router-dom";
import Router from "./components/routes/Router.jsx";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
    return (

        <BrowserRouter>
            <Nav />
            <Router />
            <Footer />
        </BrowserRouter>

    );
}

export default App;
