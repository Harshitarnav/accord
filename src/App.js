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
            <NavBar textColor={isHomePage ? 'text-white' : 'text-black'}
                    bordercColor=
                        {isHomePage ? 'border-white' : 'border-gray-300'}

                    bgColor={isHomePage ? 'bg-gray-800' : 'bg-white'
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