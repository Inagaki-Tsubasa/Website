
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import {  Route, Routes, useLocation } from "react-router-dom";
import Skills from './components/Skills';
import Question from './components/Question';
import Like from './components/Like';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        
        <Header />
        <Routes location={location} key={location.pathname}>

          <Route path='/website/' element={<HomePage />} />
          <Route path='/website/skills' element={<Skills />} />
          <Route path='/website/question' element={<Question />} />
          <Route path='/website/like' element={<Like />} />
          
          
          
         </Routes>
         <Footer />

      </AnimatePresence>
    </div>
  );
}

export default App;
