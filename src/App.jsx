import './App.css'
import Header from './Component/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OfferZone from './Component/Offerzone';
import Collection from './Component/Collection';
import ExploreAndBuy from './Component/ExploreAndBuy';
import SuitSet from './Component/SuitSet';
import LuxeSet from './Component/LuxeSet';
import Footer1 from './Component/Footer1.JSX';
import Detailsprod from './Component/detailsprod';
import HappyCustomers from './Component/HappyCustomers';
import Footer2 from './Component/Footer2';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Login route */}
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage/>} />

            {/* Home route (default page content) */}
            <Route
              path="/"
              element={
                <>
                  <OfferZone />
                  <Collection />
                  <ExploreAndBuy />
                  <SuitSet />
                  <LuxeSet />
                  <Footer1 />
                  <Detailsprod />
                  <HappyCustomers />
                </>
              }
            />
          </Routes>
              <Footer2 />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
