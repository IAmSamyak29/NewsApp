import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';

function App() {
  let pageSize = 10; //it means how many news articles will get displayed on a single page.
  const [country, setCountry] = useState('')

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [country])




  return (
    <div>
      <BrowserRouter>
        <Navbar country={country} setCountry={setCountry} />
        <Routes>
          <Route exact path="/business" element={<News key="business" category="business" pageSize={pageSize} country={country} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" pageSize={pageSize} country={country} />} />
          <Route exact path="/health" element={<News key="health" category="health" pageSize={pageSize} country={country} />} />
          <Route exact path="/science" element={<News key="science" category="science" pageSize={pageSize} country={country} />} />
          <Route exact path="/sports" element={<News key="sports" category="sports" pageSize={pageSize} country={country} />} />
          <Route exact path="/technology" element={<News key="technology" category="technology" pageSize={pageSize} country={country} />} />
          <Route exact path="/" element={<News key="general" category="general" pageSize={pageSize} country={country} />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
