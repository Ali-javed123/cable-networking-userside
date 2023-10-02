import logo from './logo.svg';
import './App.css';
import Home1 from './Pages/Home1';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import AboutUs from './Pages/AboutUs';
import Movie from './Pages/Movie';
import MovieDetail from './Pages/MovieDetail';
import Service from './Pages/Service';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
function App() {
  return (
    <div className="App">

     <Router>
        <Routes>
          {/* >>>>Superadmin panel>>>>> */}
       
        <Route exact path="/" element={< Home1 />}></Route>
        <Route exact path="/Home2" element={< Home2 />}></Route>
        <Route exact path="/Home3" element={< Home3 />}></Route>
        <Route exact path="/Home3" element={< Home3 />}></Route>
        <Route exact path="/Home4" element={< Home4 />}></Route>
        <Route exact path="/AboutUs" element={< AboutUs />}></Route>
        <Route exact path="/Movie" element={< Movie />}></Route>
        <Route exact path="/MovieDetail" element={< MovieDetail />}></Route>
        <Route exact path="/Service" element={< Service />}></Route>

        
        
          {/* >>>>Superadmin panel>>>>> */}

        {/* >>>>>>>>>trainer routes >>>>>>>>>*/}
      

        {/* >>>>>>>>>trainer routes  >>>>>>>>>*/}

    {/* >>>>>>>>>Doctor routes >>>>>>>>>*/}
   
        {/* >>>>>>>>>Doctor routes  >>>>>>>>>*/}



          {/* >>>>Superadmin panel>>>>> */}
     
          {/* >>>>Superadmin panel>>>>> */}


   
           
        </Routes>
        </Router>

    </div>
  );
}

export default App;
