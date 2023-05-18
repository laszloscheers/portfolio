import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppNavbar from './components/AppNavbar/AppNavbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';

function App() {

  return (
    <div>      
        <Router>
            
            <AppNavbar />
            <Routes>
                {/* Home Route */}
                <Route path="/" exact element={<Home />} />

                {/* English Route */}
                <Route path="/en" exact element={<Home language={'en'}/>}/>

                {/* Spanish Displayed Route */}
                <Route path="/es" exact element={<Home language={'es'}/>}/>
            </Routes>

            <Footer />
        </Router>
    </div>
  );
}

export default App;
