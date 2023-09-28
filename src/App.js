import logo from './logo.svg';
import './App.css';
import Home1 from './Pages/Home1';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
function App() {
  return (
    <div className="App">

     <Router>
        <Routes>
          {/* >>>>Superadmin panel>>>>> */}
       
        <Route exact path="/" element={< Home1 />}></Route>
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
