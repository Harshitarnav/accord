import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import HomePage from './Screens/HomePage';
import AboutUs from './Screens/AboutUs';
import Services from './Screens/ServicesPage';
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";
import FloatingContactButton from "./components/FloatingContactButton";

function App() {
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    console.log('location', isHomePage);
    return (

        <div className="App">
            <NavBar textColor={isHomePage ? 'text-white' : 'text-white'}
                    bordercColor=
                        {isHomePage ? 'border-white' : 'border-white'}

                    bgColor={isHomePage ? 'bg-white' : 'bg-white'
            } />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            {/* <FloatingContactButton /> */}
            <BottomBar/>
        </div>

    );
}

export default App;