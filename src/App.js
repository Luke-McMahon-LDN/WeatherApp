import "./App.css";
import React, { useState, useEffect } from "react";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { SidebarComponent } from "./components/Sidebar/SidebarComponent";
import { FeedComponent } from "./components/Feed/FeedComponent";
import axios from "axios";

function App() {
  // TODO - this is the "main" component for our app, and it will include all the global state that we care about
  //  This should include things like:
  //  * the sidebar expanded state
  //  * the selected category (books/characters/houses)
  //  * the feed results

  // TODO [STRETCH] - This could also include
  //  * the search term (if there is one)
  //  * whether the app is fetching data (loading)
  //  * any additional filters (number of results/filter terms in query string)

  //  Each part of the state will need to be passed down to its respective component(s) in order for it
  //  to be displayed/updated in the correct part of the UI
  //  * E.g. maybe you can expand/collapse the sidebar from the header and the feed, as well as the sidebar itself
  //  This means that the state will need to be accessed/updated from all of these components!

  // To get started:
  // TODO - add in an expanded state/setState
  // TODO - add in a feedResults state/setState
  // (See cheat sheet for useState example)

  // TODO - import getData() from api (you will need to write this function)
  //         and call it here (setting the results to the feedResults)
  // TODO [STRETCH] - implement loading state and pass to FeedComponent

  // TODO - pass in expanded sidebar state to components that need to know about it/update it.

  /*ATTEMPT TO CONDENSE- tried using a 2D array to condense the code so it didn't have to run seperately for each category
  const category = ([
    [houses, setHouses],
    [characters, setCharacters],
    [books, setBooks],
  ] = useState([]));
  const categorySelector = 0;
  // return category;

  //const category[categorySelector] = useState([]);

  //const [houses, setHouses] = useState([]);
  function fetchCategory() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("https://www.anapioficeandfire.com/api/houses")
      .then(function (response) {
        // handle success
        category[categorySelector[1]](response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  useEffect(fetchCategory, []);

*/

  //can recieve api data from all three categories, but cannot choose which category to display yet-
  //this would need a state change to affect multiple lines in this file and in the FeedComponent

  let category = "";
  function setCategoryToHouses() {
    category = "Houses";
  }
  function setCategoryToCharacters() {
    category = "Characters";
  }
  function setCategoryToBooks() {
    category = "Books";
  }

  const [houses, setHouses] = useState([]);
  function fetchHouses() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("https://www.anapioficeandfire.com/api/houses")
      .then(function (response) {
        // handle success
        setHouses(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(fetchHouses, []);

  const [books, setBooks] = useState([]);
  function fetchBooks() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("https://www.anapioficeandfire.com/api/books")
      .then(function (response) {
        // handle success
        setBooks(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(fetchBooks, []);

  const [characters, setCharacters] = useState([]);
  function fetchCharacters() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("https://www.anapioficeandfire.com/api/characters")
      .then(function (response) {
        // handle success
        setCharacters(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  useEffect(fetchCharacters, []);

  console.log(category);
  console.log(characters);
  console.log(books);
  console.log(houses);

  //the console seems to show return running multiple times- not sure why
  return (
    <div className="app">
      <HeaderComponent />
      <img
        src={require("../src/images/got.jpg").default}
        height="232"
        width="430"
      />
      <SidebarComponent />
      <form>
        <button /*regardless of which button is pressed the console log below prints */
          className="housesButton"
          onClick={setCategoryToHouses}
          onClick={console.log("housespressed")}
        >
          Houses
        </button>
        <button className="charactersButton" onClick={setCategoryToCharacters}>
          Characters
        </button>
        <button className="booksButton" onClick={setCategoryToBooks}>
          Books
        </button>
      </form>
      <FeedComponent books={books} />
    </div>
  );
}

export default App;
