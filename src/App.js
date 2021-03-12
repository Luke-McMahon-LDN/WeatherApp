import "./App.css";
import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { SidebarComponent } from "./components/Sidebar/SidebarComponent";
import { FeedComponent } from "./components/Feed/FeedComponent";
import axios from "axios";

function App() {
 
  const [feedResults, setFeedResults] = useState([]);
  const [dataChoice, setDataChoice] = useState("houses");

  function fetchData(selection) {
    const axios = require("axios");

    
    axios
      .get(`https://www.anapioficeandfire.com/api/${selection}?page=1&pageSize=50`)
      .then(function (response) {
       
        setFeedResults(response.data);
      })
      .catch(function (error) {
        
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData(dataChoice);
  }, [dataChoice]);

  document.body.style.backgroundColor = "#F3F3F3";
  document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp6580673.jpg')";
  return (
    <div className="app">
      <HeaderComponent />
      <img class="center"
      src={require("../src/images/got_silver.png").default}
        height="100"
        width="500"
        ></img>
        

      <SidebarComponent setDataChoice={setDataChoice} dataChoice={dataChoice} />
      <div class="feed-grid"> <FeedComponent feedResults={feedResults} dataChoice={dataChoice}/> </div>
    </div>
  );
}

export default App;
