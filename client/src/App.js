import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movies from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );
 

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Switch>

      <Route path="/movies/:id">
          <Movies />
          console.log("This is the movies component:", Movies);
        </Route>

        <Route path="/">
          <MovieList />
        </Route> 
      

      </Switch>
    </div>
  );
};

export default App;
