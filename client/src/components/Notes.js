import React from 'react';
import Header from './notes/Nav';
import Home from './notes/Home';
import CreateNote from './notes/CreateNote';
import EditNote from './notes/EditNote';
import {BrowserRouter , Route, Routes} from 'react-router-dom';

const Notes = ({setIsLogin}) => {
  return (
    <BrowserRouter>
      <div className="notes-page">
        <Header setIsLogin={setIsLogin} />
        <section>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/create" element={<CreateNote />} exact />
            <Route path="/edit/:id" element={<EditNote />} exact />
          </Routes>
        </section>          
      </div>
    </BrowserRouter>
    );
}

export default Notes;