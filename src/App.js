import React, { useEffect } from 'react';
import { Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Add from "./Add";
import Edit from "./Edit";
import Home from "./Home";
import { loadDictFB } from './redux/modules/dict';

const App = () => {
  
  const dispatch = useDispatch();
  useEffect(()=> {
    document.body.style.margin = 0;
    document.body.style.backgroundColor= "#000033";
    dispatch(loadDictFB());
   }, [] )

    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/edit/:id" component={Edit} />
      </div>
      );
    }

export default App;
