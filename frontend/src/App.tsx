import React, {useEffect, useState} from 'react';
import logo from './library.png';
import './App.css';
import BookOverview from "./components/BookOverview";
import {Book} from "./model/Book";
import axios from "axios";



function App() {

  const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {

        axios.get("/book")
            .then(response => response.data)
            .then(data => setBooks(data))
            .catch(console.error)
    }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          My Little Library
          <BookOverview books={books} />
      </header>


    </div>
  );
}

export default App;
