import React, {useEffect} from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RemoveBackground from "./components/RemoveBackground";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGa from "react-ga";

function App() {

  useEffect(() => {
    ReactGa.initialize('G-TBGX82SVFH')

    //to report page views
    ReactGa.pageview('window.location.pathname + window.location.search');
  }, [])
  return (
    <div className="App">
      <div className="container py-5">
        <Header/>
          <RemoveBackground/>
      </div>
      <Footer/>
    </div>
  );
}


export default App;
