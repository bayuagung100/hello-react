import React from 'react';
// import {BrowserRouter, Route} from "react-router-dom"; //default routing
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; //bisa juga routing seperti ini
import App from './components/home/App';
import Contact from './components/page/Contact';

const AppRouter = () => (
    //penulisan routing default
    // <BrowserRouter>
    //     <div>
    //         {/* penulisan exact hanya untuk diawal saja */}
    //         <Route path="/" exact component={App} />
    //         <Route path="/halaman-kontak" component={Contact} />
    //     </div>
    // </BrowserRouter>

    //bisa juga seperti ini penulisan routingnya
    <Router>
        <div>
            {/* Navigasi Routing */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/halaman-kontak">Kontak</Link>
                    </li>
                </ul>
            </nav>
            {/* penulisan exact hanya untuk diawal saja */}
            <Route path="/" exact component={App} />
            <Route path="/halaman-kontak" component={Contact} />
        </div>
    </Router>
);

export default AppRouter ;